import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { Alert, Image, useColorScheme } from 'react-native';
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
        source={images.DRAWER_LOGO}
        style={{
          width: screen.width * 0.45,
          height: screen.width * 0.18,
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
              // tintColor={'blax'}
              source={icons.LOGOUT}
              width={20}
              height={20}
              style={{
                width: 20,
                height: 20,
              }}
            />
          )}
          onPress={handleLogout}
          labelStyle={{  fontSize: 16 }}
        />
      </DrawerContentScrollView>
    </>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEnabled: true,
        drawerStyle: {
          backgroundColor:'white',
        },
        drawerActiveTintColor: '#00BFFF',
        drawerInactiveTintColor: 'black',
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
              tintColor={'#00BFFF'}
              source={icons.HOME}
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
