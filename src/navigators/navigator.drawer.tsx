import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, useNavigation } from '@react-navigation/native';

// Screens

// Services

import images from '../assets/images';
import { screen } from '../utils/constant';
import { useDispatch } from 'react-redux';
import icons from '../assets/icons';
import Home from '../screens/App/Home';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleLogout = async () => {
    console.log('Logout Successfull');
  };

  return (
    <>
      <Image
        source={icons.LOGO}
        style={{
          width: screen.width * 0.5,
          height: screen.height * 0.05,
          alignSelf: 'flex-start',
          marginTop: screen.height * 0.05,
          // marginBottom: 20,
          marginHorizontal: 20,
          resizeMode: 'contain',
        }}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          icon={() => (
            <Image
              tintColor={'green'}
              source={icons.LOGO}
              width={20}
              height={20}
              style={{
                width: 20,
                height: 20,
              }}
            />
          )}
          onPress={handleLogout}
          labelStyle={{ color: 'green', fontSize: 16 }}
        />
      </DrawerContentScrollView>
    </>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEnabled: false,
        drawerStyle: {
          backgroundColor: 'red',
        },
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'green',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'normal',
        },
      }}
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <Image
              tintColor={'green'}
              source={icons.LOGO}
              width={20}
              height={20}
              style={{
                width: 20,
                height: 20,
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
