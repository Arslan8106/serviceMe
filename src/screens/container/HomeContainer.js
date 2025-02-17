import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabBar from '../../components/shared/TabBar';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../../assets/colors/colors';
import LoginScreen from '../login/LoginScreen';
import SignupScreen from '../login/SignupScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

function HomeContainer() {
  const [user, setUser] = useState(null);
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  // const getUser = async () => {
  //   const user = await AsyncStorage.getItem('user');
  //   return user ? JSON.parse(user) : null;
  // };
  // useEffect(() => {
  //   const checkUser = async () => {
  //     const storedUser = await getUser();
  //     setUser(storedUser);
  //   };
  //   checkUser();
  // }, []);
  return (
    <NavigationContainer>
      {
        <Stack.Navigator
          screenOptions={{
            transparentCard: true,
            cardStyle: {backgroundColor: colors.background},
          }}>
          <Stack.Group>
            {isAuthenticated ? (
              <Stack.Screen
                options={{headerShown: false}}
                name={'TabBar'}
                component={TabBar}
              />
            ) : (
              <>
                <Stack.Screen
                  name="LoginScreen"
                  component={LoginScreen}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="SignupScreen"
                  component={SignupScreen}
                  options={{headerShown: false}}
                />
              </>
            )}
          </Stack.Group>
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

export default HomeContainer;
