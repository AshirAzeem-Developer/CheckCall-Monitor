import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import RootNavigator from './src/navigators/navigator.root';

//store
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';
import CustomSplash from './src/components/CustomSplash';
import DrawerNavigator from './src/navigators/navigator.drawer';

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          {show ? (
            <CustomSplash onEnd={() => setShow(false)} show={show} />
          ) : (
            <RootNavigator />
          )}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
