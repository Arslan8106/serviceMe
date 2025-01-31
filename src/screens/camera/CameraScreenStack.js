import React from "react";
import colors from "../../assets/colors/colors";
import HomeScreen from "./CameraScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const CameraScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        transparentCard: true,
        cardStyle: { backgroundColor: colors.lightWhite },
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>

  );
};
export default CameraScreenStack;
