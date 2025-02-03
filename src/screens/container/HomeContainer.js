import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from '../../components/shared/TabBar';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../../assets/colors/colors';
import LoginScreen from '../login/LoginScreen';
import SignupScreen from '../login/SignupScreen';
import LoginSignupModal from '../../components/modals/LoginSignupModal';
import HomeScreen from '../home/HomeScreen';

const Stack = createStackNavigator();

function HomeContainer() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <NavigationContainer >
            {
                <Stack.Navigator screenOptions={{
                    transparentCard: true,
                    cardStyle: { backgroundColor: colors.background },
                }}                 initialRouteName="LoginScreen"
                >
                      <Stack.Group>
                          <Stack.Screen
                            options={{ headerShown: false }}
                            name={"TabBar"}
                            component={TabBar}
                          />
                          <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
                          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                      </Stack.Group>

                </Stack.Navigator>
            }
            {/*{!isAuthenticated && <LoginSignupModal isLoggedIn={isAuthenticated} setIsLoggedIn={setIsAuthenticated()} />    }*/}

        </NavigationContainer>

);
}

export default HomeContainer;
