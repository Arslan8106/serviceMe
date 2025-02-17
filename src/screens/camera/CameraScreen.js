import {
  Alert,
  Button,
  Image,
  PermissionsAndroid,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../assets/styles/CameraScreenStyle';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import colors from '../../assets/colors/colors';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Geolocation from 'react-native-geolocation-service';
import Toast from 'react-native-toast-message';

const CameraScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const [meterData, setMeterData] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [workshops, setWorkshops] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [locationName, setLocationName] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(false);
  console.log('wwww...', workshops);
  useEffect(() => {
    if (analysis) {
      recommendNearbyWorkshop(analysis);
    }
  }, [analysis]);

  useEffect(() => {
    requestLocationPermission();
    checkPermission();

  }, [imageUri, meterData]);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          async position => {
            const {latitude, longitude} = position.coords;
            latitude && longitude && setCurrentLocation([longitude, latitude]);
            console.log('location', position.coords );

          },
          error => {},
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    checkPermission();

  }, [cameraPermission]);

  const checkPermission = async () => {
    const result = await check(PERMISSIONS.ANDROID.CAMERA);
    // For iOS, use PERMISSIONS.IOS.CAMERA
    if (result === RESULTS.GRANTED) {
      setCameraPermission(true);
    } else {
      setCameraPermission(false);
      requestCameraPermission();
    }
  };


  const requestCameraPermission = async () => {
    const result = await request(PERMISSIONS.ANDROID.CAMERA); // For Android
    // For iOS, use PERMISSIONS.IOS.CAMERA
    if (result === RESULTS.GRANTED) {
      setCameraPermission(true);
    } else {
      setCameraPermission(false);
      showPermissionAlert();
    }
  };

  const showPermissionAlert = () => {
    Alert.alert(
      'Camera Permission',
      'This app needs access to your camera. Please grant the permission in your settings.',
      [
        {
          text: 'OK',
          onPress: () => {
            // You can redirect to app settings if you want
          },
        },
      ],
      {cancelable: false},
    );
  };

  if (cameraPermission === null) {
    return (
      <View style={styles.center}>
        <Text>Checking camera permission...</Text>
      </View>
    );
  }

  if (!cameraPermission) {
    return (
      <View style={styles.center}>
        <Text>Camera permission is required to use the camera.</Text>
      </View>
    );
  }

  const handleImageSelection = (fromCamera, imageType) => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    const callback = response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const source = {uri: response.assets[0].uri};
        setMeterData(prevState => ({...prevState, [imageType]: source.uri}));
        console.log('MMMM', meterData);
      }
    };

    if (fromCamera) {
      launchCamera(options, callback);
    } else {
      launchImageLibrary(options, callback);
    }
  };

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        const source = {uri: response.assets[0].uri};
        setImageUri(source.uri);
      }
    });
  };


  const removeSelectImage = () => {
    setImageUri(null);
    setMeterData(null);
    setAnalysis(null);
    setWorkshops('');
  };
  const viewWorkShops = () => {
    console.log('workshops', workshops);
    navigation.navigate('Workshop', {workshops});
  };

  const recognizeImage = async uri => {
    try {
      setAnalysis('');

      const imageData = await fetch(
        imageUri || meterData.previous_meter_picture,
      );
      const blob = await imageData.blob();

      const base64Image = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result.split(',')[1];
          resolve(base64Data);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      setLoading(true);
      Toast.show({
        type: 'success',
        text1: 'Finding nearby workshops.....',
        visibilityTime: 2000,
      });

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: 'Identify this car part and check if it has any visible damage.',
                },

                {
                  type: 'image_url',
                  image_url: {
                    url: `data:image/jpeg;base64,${base64Image}`,
                  },
                },
              ],
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );

      setAnalysis(response.data.choices[0].message.content);
    } catch (error) {
      console.error(
        '❌ Error analyzing image:',
        error.response ? error.response.data : error.message,
      );
      setAnalysis('Error analyzing image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const recommendNearbyWorkshop = async aiResponse => {
    let repairType = 'car repair';
    if (
      aiResponse.toLowerCase().includes('windshield') ||
      aiResponse.toLowerCase().includes('glass')
    ) {
      repairType = 'car auto glass repair';
    } else if (
      aiResponse.toLowerCase().includes('tire') ||
      aiResponse.toLowerCase().includes('wheel')
    ) {
      repairType = 'car tire shop';
    } else if (
      aiResponse.toLowerCase().includes('engine') ||
      aiResponse.toLowerCase().includes('mechanical damage')
    ) {
      repairType = 'car auto repair shop';
    } else if (
      aiResponse.toLowerCase().includes('paint') ||
      aiResponse.toLowerCase().includes('scratch')
    ) {
      repairType = 'car painting service';
    } else if (
      aiResponse.toLowerCase().includes('bumper') ||
      aiResponse.toLowerCase().includes('body damage')
    ) {
      repairType = 'car auto body shop';
    } else if (aiResponse.toLowerCase().includes('brake')) {
      repairType = 'car brake repair shop';
    } else if (aiResponse.toLowerCase().includes('door')) {
      repairType = 'car body part repair shop';
    }
    const longitude = currentLocation[0];

    const latitude = currentLocation[1];
    console.log('repairType:', repairType);

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=50000&keyword=${repairType}&key=AIzaSyAGKksK92yS9JK-ksqlqotUsVN85f-L5Mg`,
      );
      console.log("response:", response);
      if (response.data.results) {
        setWorkshops(response.data.results);
      } else {
        setWorkshops([]);
        Toast.show({type: 'error', text1: 'No nearby workshops found'});
      }
    } catch (error) {
      console.error('❌ Error fetching workshops:', error);
    }
  };

  return (
    <SafeAreaView
      contentInsetAdjustmentBehavior="automatic"
      nestedScrollEnabled={true}
      style={{
        backgroundColor: colors.midLightBlack,
        flex: 1,
        paddingTop: '4%',
      }}>
      <ScrollView>
        <View>
          <Text style={styles.cameraHeadingText}>
            Take a picture of the issue
          </Text>
          {meterData && (
            <Image
              source={{uri: meterData.previous_meter_picture}}
              style={styles.cameraImage}
            />
          )}
          {imageUri && (
            <Image source={{uri: imageUri}} style={styles.cameraImage} />
          )}
          <View style={styles.cameraButtons}>
            <TouchableOpacity
              onPress={() =>
                handleImageSelection(true, 'previous_meter_picture')
              }>
              <Ionicons name="camera-outline" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={selectImage}>
              <AntDesign name="upload" size={40} color="white" />
            </TouchableOpacity>
          </View>
          {(imageUri || meterData) && (
            <TouchableOpacity onPress={removeSelectImage}>
              <Text style={styles.removeImage}>Remove Image</Text>
            </TouchableOpacity>
          )}
          {(imageUri || meterData) && !analysis && (
            <TouchableOpacity onPress={recognizeImage}>
              <Text style={styles.sendImage}>Send Image</Text>
            </TouchableOpacity>
          )}
          {!_.isEmpty(workshops) && (
            <TouchableOpacity onPress={viewWorkShops}>
              <Text style={styles.viewWorkShops}>View Workshops</Text>
            </TouchableOpacity>
          )}

          {loading ? (
            <View style={styles.skeletonWrapper}>
              <SkeletonPlaceholder backgroundColor={colors.grey}>
                <SkeletonPlaceholder.Item width={330} height={220} />
              </SkeletonPlaceholder>
            </View>
          ) : (
            analysis && (
              <View style={styles.responseWrapper}>
                <ScrollView nestedScrollEnabled={true}>
                  <Text style={styles.responseText}>{analysis}</Text>
                </ScrollView>
              </View>
            )
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CameraScreen;
