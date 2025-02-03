import {Image, SafeAreaView, Text, View} from 'react-native';
import LoginSignupModal from '../../components/modals/LoginSignupModal';
import React, {useState} from 'react';
import styles from '../../assets/styles/HomeScreenStyle';
import colors from '../../assets/colors/colors';

const HomeScreen = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <SafeAreaView style={{ backgroundColor: colors.midLightBlack, flex: 1 }}>
        <View style={styles.homeContainer} >
            <Image style={styles.appLogoStyle} source={require('../../assets/images/serviceMe/logo.png')} />

            <Text style={styles.appLogoText}>Diagnose, Fix, Drive Confidently</Text>

        </View>

      </SafeAreaView>
  )
}
export default HomeScreen;
