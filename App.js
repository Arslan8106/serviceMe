import React from "react";
import { SafeAreaView, Text, useColorScheme } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeContainer from './src/screens/container/HomeContainer';
import Toast from 'react-native-toast-message';
import { FontVariant } from "react-native";
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.red : 'white',
  };
  return (
      // <Provider store={store}>
      //<PersistGate loading={null} persistor={persistor}>
          <HomeContainer />
      //     <Toast />
      //   </PersistGate>
      // </Provider>
  );
}

export default App;
