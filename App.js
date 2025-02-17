import React from 'react';
import HomeContainer from './src/screens/container/HomeContainer';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeContainer />
        <Toast />
      </PersistGate>
    </Provider>
  );
}

export default App;
