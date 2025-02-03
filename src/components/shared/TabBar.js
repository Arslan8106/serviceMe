import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenStack from '../../screens/home/HomeScreenStack';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../assets/colors/colors";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatScreenStack from '../../screens/chat/ChatScreenStack';
import CameraScreenStack from '../../screens/camera/CameraScreenStack';
import WorkshopScreenStack from '../../screens/workshop/WorkshopScreenStack';
import HomeScreen from '../../screens/home/HomeScreen';
// import FavouritesScreenStack from "../../screens/favourites/FavouritesScreenStack";
// import TripsScreenStack from "../../screens/trips/TripsScreenStack";
// import InboxScreenStack from "../../screens/inbox/InboxScreenStack";
// import MoreScreenStack from "../../screens/more/MoreScreenStack";
// import ImagesScreen from "../../screens/favourites/ImagesScreen";

const Tab = createBottomTabNavigator();

const TabBar = ({ navigation, route }) => {
  const [checkActive, setCheckActive] = useState("");
  const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
    switch (routeName) {
      case "Home":
        setCheckActive("");
        return "Home";
      default:
        return "Home";
    }
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
        tabBarStyle: [
          {
            display: "flex",
            height: 55,
            elevation: 15,
            backgroundColor: colors.black,
          },
          null,
        ],
        tabBarItemStyle: {
          marginTop: 10,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreenStack} options={{
        headerShown: false,

        // tabBarLabelStyle: [
        //   {
        //     fontFamily: "Poppins-Light",
        //   },
        // ],
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={25} color={color} />
        ),
        unmountOnBlur: true,
      }}
      />
      <Tab.Screen name="Chat" component={ChatScreenStack} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubble-ellipses-outline" size={25} color={color} />
        ),
        unmountOnBlur: true,
      }}
      />
      <Tab.Screen name="Camera" component={CameraScreenStack} options={{
        headerShown: false,
        tabBarLabel: "Camera",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="camera-outline" size={25} color={color} />
        ),
        unmountOnBlur: true,
      }}
      />
      <Tab.Screen name="Workshop" component={WorkshopScreenStack} options={{
        headerShown: false,
        tabBarLabel: "Workshop",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="car-repair" size={25} color={color} />
        ),
        unmountOnBlur: true,
      }}
      />
      {/*<Tab.Screen name="Favourites" component={FavouritesScreenStack} options={{*/}
      {/*  headerShown: false,*/}
      {/*  tabBarLabel: "Favorites",*/}
      {/*  tabBarIcon: ({ color, size }) => (*/}
      {/*    <MaterialCommunityIcons name="heart-outline" color={color} size={25} />),*/}
      {/*  unmountOnBlur: true,*/}
      {/*}}*/}
      {/*/>*/}
      {/*<Tab.Screen name="Trips" component={TripsScreenStack} options={{*/}
      {/*  headerShown: false,*/}
      {/*  tabBarLabel: "Trips",*/}
      {/*  tabBarIcon: ({ color, size }) => (*/}
      {/*    <MaterialCommunityIcons name="road-variant" color={color} size={25} />),*/}
      {/*  unmountOnBlur: true,*/}
      {/*}}*/}
      {/*/>*/}
      {/*<Tab.Screen name="InboxScreen" component={InboxScreenStack} options={{*/}
      {/*  headerShown: false,*/}
      {/*  tabBarLabel: "Inbox",*/}
      {/*  tabBarIcon: ({ color, size }) => (*/}
      {/*    <MaterialCommunityIcons name="message-outline" color={color} size={25} />),*/}
      {/*  unmountOnBlur: true,*/}
      {/*}}*/}
      {/*/>*/}
      {/*<Tab.Screen name="More" component={MoreScreenStack} options={{*/}
      {/*  headerShown: false,*/}
      {/*  tabBarLabel: "More",*/}
      {/*  tabBarIcon: ({ color, size }) => (*/}
      {/*    <MaterialIcons name="more-horiz" color={color} size={25} />),*/}
      {/*  unmountOnBlur: true,*/}
      {/*}}*/}
      {/*/>*/}
      {/*<Tab.Screen name="Images" component={ImagesScreen} options={{*/}
      {/*  headerShown: false,*/}
      {/*  tabBarLabel: "Images",*/}
      {/*  tabBarIcon: ({ color, size }) => (*/}
      {/*    <MaterialIcons name="more-horiz" color={color} size={25} />),*/}
      {/*  unmountOnBlur: true,*/}
      {/*}}*/}
      {/*/>*/}
    </Tab.Navigator>
  );
};
export default TabBar;
