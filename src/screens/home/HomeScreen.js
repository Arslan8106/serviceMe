import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from '../../assets/styles/HomeScreenStyle';
import colors from '../../assets/colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {loginSuccess, logout} from '../../redux/action';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user);

  const removeUser = () => {
    try {
        dispatch(logout());
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.midLightBlack, flex: 1}}>
      <TouchableOpacity onPress={()=> dispatch(logout())} style={styles.logoutWrapper}>
        <Text style={styles.logoutText} >  {' '}
          Logout{' '}
        </Text>
          <MaterialIcons name="logout" size={22} color={colors.darkRed} />
      </TouchableOpacity>
      <View style={styles.homeContainer}>
        <Image
          style={styles.appLogoStyle}
          source={require('../../assets/images/serviceMe/logo.png')}
        />

        <Text style={styles.appLogoText}>Diagnose, Fix, Drive Confidently</Text>

      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
