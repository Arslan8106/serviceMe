import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/colors/colors';
import styles from '../../assets/styles/WorkShopScreenStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';

const WorkshopScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const navigateCamera = () => {
    navigation.navigate('Camera');
  };
  const workshops = route.params?.workshops;
  const openGoogleMaps = workshops => {
    const lat = workshops?.geometry?.location?.lat;
    const lng = workshops?.geometry?.location?.lng;
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    Linking.openURL(url);
  };
  const StarRating = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = totalStars - filledStars - (hasHalfStar ? 1 : 0);

    return (
      <View style={styles.cardLowerWrapper}>
        {Array(filledStars)
          .fill()
          .map((_, index) => (
            <Ionicons key={index} name="star" size={25} color="yellow" />
          ))}
        {hasHalfStar && <Ionicons name="star-half" size={25} color="yellow" />}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <Ionicons key={`empty-${index}`} name="star-outline" size={25} color="yellow" />
          ))}
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.midLightBlack,
        flex: 1,
        paddingTop: '6%',
      }}>
      <ScrollView>
        <View>
          {workshops?.length > 0 && (
            <Text style={styles.cameraHeadingText}>Nearby Workshops</Text>
          )}
          {workshops?.length > 0 ? (
            workshops?.map((shop, index) => (
              <View style={styles.workShopCards} key={index}>
                <Image
                  style={styles.cardImages}
                  source={{
                    uri: shop?.photos?.[0]?.photo_reference
                      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${shop.photos[0].photo_reference}&key=AIzaSyAGKksK92yS9JK-ksqlqotUsVN85f-L5Mg`
                      : 'https://media.gettyimages.com/id/172181182/photo/silver-car-with-a-large-dent-in-the-side-ruining-two-doors.jpg?s=612x612&w=gi&k=20&c=WJLVoYFW2mS-stf7oh72aPCZ3b0_J9wT7BQJSgOyyEs=',
                  }}
                />
                <View style={styles.cardLeftWrapper}>
                  <Text style={styles.cardText}>{shop?.name}</Text>
                  <View style={styles.cardLowerWrapper}>
                    <Text style={styles.cardRatingText}>{shop?.rating}</Text>

                    <StarRating rating={shop?.rating || 0} />
                    <TouchableOpacity onPress={() => openGoogleMaps(shop)}>
                      <Ionicons name="location-sharp" size={35} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <>
              <Text style={styles.cameraHeadingText}>No nearby workshops</Text>
              <Text style={styles.navigateText}>Please navigate to </Text>
              <TouchableOpacity onPress={navigateCamera}>
                <Text style={styles.cameraScreenButton}>Camera Screen</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default WorkshopScreen;
