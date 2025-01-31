import React from "react";
import colors from "../../assets/colors/colors";
import { createStackNavigator } from "@react-navigation/stack";
import WorkshopScreen from './WorkshopScreen';

const Stack = createStackNavigator();
const WorkshopScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        transparentCard: true,
        cardStyle: { backgroundColor: colors.lightWhite },
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="ChatScreen"
          component={WorkshopScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>

  );
};
export default WorkshopScreenStack;
