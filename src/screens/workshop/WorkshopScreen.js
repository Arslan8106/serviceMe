import {Image, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../assets/colors/colors';
import styles from '../../assets/styles/WorkShopScreenStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WorkshopScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.midLightBlack,
        flex: 1,
        paddingTop: '6%',
      }}>
      <View>
        <Text style={styles.cameraHeadingText}>Engine Repair</Text>
        <View style={styles.workShopCards}>
          <Image
            style={styles.cardImages}
            source={require('../../assets/images/service.png')}
          />
          <View style={styles.cardLeftWrapper}>
            <Text style={styles.cardText}>PowerTech Auto Services</Text>
            <View style={styles.cardLowerWrapper}>
              <Text style={styles.cardText}>4.1</Text>
              <View style={styles.cardLowerWrapper}>
                <Ionicons name="star" size={25} color="yellow" />
                <Ionicons name="star" size={25} color="yellow" />
                <Ionicons name="star" size={25} color="yellow" />
                <Ionicons name="star" size={25} color="yellow" />
                <Ionicons name="star-outline" size={25} color="yellow" />
              </View>
              <Ionicons name="location-sharp" size={35} color="red" />
            </View>
          </View>
        </View>

        <View style={styles.workShopCards}>
          <Image
            style={styles.cardImages}
            source={require('../../assets/images/tripScreen.png')}
          />
          <View style={styles.cardLeftWrapper}>
            <Text style={styles.cardText}>Abrah Machine Repairing LLC</Text>
            <View style={styles.cardLowerWrapper}>
              <Text style={styles.cardText}>4.5</Text>
              <View style={styles.cardLowerWrapper}>
                <Ionicons name="star" size={25} color="yellow" />
                <Ionicons name="star" size={25} color="yellow" />
                <Ionicons name="star" size={25} color="yellow" />
                <Ionicons name="star" size={25} color="yellow" />
                <Ionicons name="star-outline" size={25} color="yellow" />
              </View>
              <Ionicons name="location-sharp" size={35} color="red" />
            </View>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
};
export default WorkshopScreen;
