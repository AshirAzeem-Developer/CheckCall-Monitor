import React, { useState } from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

// Screens
import Home from '../screens/App/Home';
import AddCustomer from '../screens/App/AddCustomer';

// Services
import images from '../assets/images';
import { screen } from '../utils/constant';
import { useDispatch } from 'react-redux';
import icons from '../assets/icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomersList from '../screens/App/CustomerList';
import AddShift from '../screens/App/AddShift';
import SitesList from '../screens/App/SiteManagement';
import AddSite from '../screens/App/AddSite';
import WorkersList from '../screens/App/WorkerManagement';
import AddWorker from '../screens/App/AddWorker';

const Drawer = createDrawerNavigator();

// --- Updated DropdownDrawerItem Component ---
interface DropdownItemProps {
  label: string;
  iconName: string;
  iconColor: string;
  iconSize: number;
  // Use the navigation prop from DrawerContentComponentProps
  navigation: DrawerContentComponentProps['navigation'];
  subItems?: { label: string; screenName: string }[];
  currentRouteName: string; // Add current route name to check active sub-items
}

const DropdownDrawerItem: React.FC<DropdownItemProps> = ({
  label,
  iconName,
  iconColor,
  iconSize,
  navigation,
  subItems,
  currentRouteName,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  const handlePressSubItem = (screenName: string) => {
    navigation.navigate(screenName);
    navigation.closeDrawer();
  };

  const handlePressMainItem = () => {
    if (subItems && subItems.length > 0) {
      handleToggleDropdown();
    } else {
      navigation.navigate(label);
      navigation.closeDrawer();
    }
  };

  return (
    <View>
      {/* Main Drawer Item */}
      <TouchableOpacity
        onPress={handlePressMainItem}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name={iconName} size={iconSize} color={iconColor} style={{ marginRight: 10 }} />
          <Text style={{ color: iconColor, fontSize: 16 }}>{label}</Text>
        </View>
        {subItems && subItems.length > 0 && (
          <Icon
            name={isExpanded ? 'chevron-up' : 'chevron-down'}
            size={iconSize * 0.7}
            color={iconColor}
          />
        )}
      </TouchableOpacity>

      {/* Sub-Items (Dropdown Content) */}
      {isExpanded && subItems && subItems.length > 0 && (
        <View style={{ marginLeft: 30, borderLeftWidth: 1, borderLeftColor: '#eee' }}>
          {subItems.map((item, index) => {
            const isActiveSubItem = currentRouteName === item.screenName;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handlePressSubItem(item.screenName)}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Icon 
                  name="circle" 
                  size={iconSize * 0.4} 
                  color={isActiveSubItem ? '#00BFFF' : 'black'} 
                  style={{ marginRight: 10 }} 
                />
                <Text style={{ color: isActiveSubItem ? '#00BFFF' : 'black', fontSize: 14 }}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

// --- Fixed CustomDrawerContent ---
function CustomDrawerContent(props: DrawerContentComponentProps) {
  // Use the navigation prop directly from props instead of useNavigation hook
  const { navigation } = props;
  
  // Get the current route name
  const currentRouteName = props.state.routes[props.state.index].name;

  const handleLogout = async () => {
    console.log('Logout Successful');
    navigation.closeDrawer();
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
          marginHorizontal: 20,
          resizeMode: 'contain',
        }}
      />
      <DrawerContentScrollView {...props}>
        <DropdownDrawerItem
          label="Dashboard"
          iconName="dashboard"
          iconColor={currentRouteName === 'Dashboard' ? '#00BFFF' : 'black'}
          iconSize={20}
          navigation={navigation}
          currentRouteName={currentRouteName}
        />
        <DropdownDrawerItem
          label="Customer Management"
          iconName="briefcase"
          iconColor={'black'}
          iconSize={20}
          navigation={navigation}
          currentRouteName={currentRouteName}
          subItems={[
            { label: 'Customers List', screenName: 'CustomersList' },
            { label: 'Add Customer', screenName: 'AddCustomer' },
          ]}
        />
        <DropdownDrawerItem
          label="Shift Allocation"
          iconName="calendar"
          iconColor={'black'}
          iconSize={20}
          navigation={navigation}
          currentRouteName={currentRouteName}
          subItems={[
            { label: 'Add Shift', screenName: 'AddShift' },
          ]}
        />
        <DropdownDrawerItem
          label="Site Management"
          iconName="map"
          iconColor={'black'}
          iconSize={20}
          navigation={navigation}
          currentRouteName={currentRouteName}
          subItems={[
            { label: 'Sites List', screenName: 'SitesList' },
            { label: 'Add Site', screenName: 'AddSite' },
          ]}
        />
        <DropdownDrawerItem
          label="Worker Management"
          iconName="users"
          iconColor={'black'}
          iconSize={20}
          navigation={navigation}
          currentRouteName={currentRouteName}
          subItems={[
            { label: 'Workers List', screenName: 'WorkersList' },
            { label: 'Add Worker', screenName: 'AddWorker' },
          ]}
        />
        <DrawerItem
          label="Logout"
          icon={() => (
            <Image
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
          labelStyle={{ fontSize: 16 }}
        />
      </DrawerContentScrollView>
    </>
  );
}

// --- DrawerNavigator ---
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEnabled: true,
        drawerStyle: {
          backgroundColor: 'white',
        },
        drawerActiveTintColor: '#00BFFF',
        drawerInactiveTintColor: 'black',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'normal',
        },
      }}
      initialRouteName="Dashboard"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Home}
        options={{
          headerShown: false,
          drawerLabel: 'Dashboard',
          drawerIcon: ({ focused, color, size }) => (
            <Image
              tintColor={color}
              source={icons.HOME}
              width={size}
              height={size}
              style={{
                width: size,
                height: size,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen name="AddCustomer" component={AddCustomer} options={{ headerShown: false }} />
      <Drawer.Screen name="CustomersList" component={CustomersList} options={{ headerShown: false }} />
      <Drawer.Screen name="AddShift" component={AddShift} options={{ headerShown: false }} />
      <Drawer.Screen name="SitesList" component={SitesList} options={{ headerShown: false }} />
      <Drawer.Screen name="AddSite" component={AddSite} options={{ headerShown: false }} />
      <Drawer.Screen name="WorkersList" component={WorkersList} options={{ headerShown: false }} />
      <Drawer.Screen name="AddWorker" component={AddWorker} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}