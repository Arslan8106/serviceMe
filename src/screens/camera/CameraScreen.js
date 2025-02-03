import {
  Alert,
  Button,
  Image,
  SafeAreaView,
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

const CameraScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const [meterData, setMeterData] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(false);
  useEffect(() => {
    // Check if the camera permission is granted or not
    const checkPermission = async () => {
      const result = await check(PERMISSIONS.ANDROID.CAMERA); // For Android
      // For iOS, use PERMISSIONS.IOS.CAMERA
      if (result === RESULTS.GRANTED) {
        setCameraPermission(true);
      } else {
        setCameraPermission(false);
        requestCameraPermission();
      }
    };

    checkPermission();
  }, []);

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
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.midLightBlack,
        flex: 1,
        paddingTop: '6%',
      }}>
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
        {imageUri && <Image source={{uri: imageUri}} style={styles.cameraImage} />}
        {(imageUri || meterData) && (
          <Text onPress={removeSelectImage} style={styles.removeImage}>Remove Image</Text>
        )}

        <View style={styles.cameraButtons}>
          <TouchableOpacity
            onPress={() => handleImageSelection(true, 'previous_meter_picture')}>
            <Ionicons name="camera-outline" size={45} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={selectImage} >
          <AntDesign name="upload" size={45} color="white" />
        </TouchableOpacity>
      </View>

        {/*{meterData && <Image source={{ uri: meterData }} style={{ width: 300, height: 300 }} />}*/}

      </View>
    </SafeAreaView>
  );
};
export default CameraScreen;
