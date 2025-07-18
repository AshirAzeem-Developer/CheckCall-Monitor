import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Navigators
import DrawerNavigator from './navigator.drawer.tsx';
import {useDispatch, useSelector} from 'react-redux';
import AppStack from './navigator.app.tsx';

const RootNavigator = () => {
  const isAuthenticated = true

  

  return isAuthenticated ? <DrawerNavigator /> : <AppStack />;
};

export default RootNavigator;
