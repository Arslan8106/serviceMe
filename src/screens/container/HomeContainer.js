import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabBar from '../../components/shared/TabBar';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../../assets/colors/colors';

const Stack = createStackNavigator();

function HomeContainer() {
    return (
        <NavigationContainer>
            {
                <Stack.Navigator screenOptions={{
                    transparentCard: true,
                    cardStyle: { backgroundColor: colors.background },
                }}>
                        <Stack.Group>
                            <Stack.Screen
                                options={{ headerShown: false }}
                                name={'TabBar'}
                                component={TabBar}
                            />
                        </Stack.Group>
                </Stack.Navigator>
            }
        </NavigationContainer>
    );
}

export default HomeContainer;
