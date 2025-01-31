import React from "react";
import colors from "../../assets/colors/colors";
import { createStackNavigator } from "@react-navigation/stack";
import WorkshopScreen from './ChatScreen';
import ChatScreen from './ChatScreen';

const Stack = createStackNavigator();
const ChatScreenStack = () => {
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
          component={ChatScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>

  );
};
export default ChatScreenStack;
