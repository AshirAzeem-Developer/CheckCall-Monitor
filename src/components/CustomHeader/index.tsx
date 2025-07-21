import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
  StyleProp,
  StyleSheetProperties,
  ViewProps,
  useColorScheme,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import useStyles from './style';
import images from '../../assets/images';
import icons from '../../assets/icons';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import { screen } from '../../utils/constant';

interface CustomHeaderProps {
  title?: string;
  showBackButton?: boolean;
  showMenu?: boolean;
  onRightIconPress?: () => void;
  rightIcon?: any;
  backgroundColor?: string;
  textColor?: string;
  translucent?: boolean;
  rightIconColor?: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title = '',
  showBackButton = false,
  showMenu = false,
  onRightIconPress,
  rightIcon,
  rightIconColor,
  backgroundColor = '#13714C',
  textColor = '#000000',
  translucent = false,
}) => {
  const navigation = useNavigation();
  const {styles, sizes, colors} = useStyles();
  const isDark = useColorScheme()

  return (
    <>
      {/* Status Bar */}
      <StatusBar
        backgroundColor={translucent ? 'transparent' : backgroundColor}
        barStyle={isDark ? 'dark-content' : 'light-content'}
        translucent={translucent}
      />

      {/* Header */}
      <View
        style={[
          styles.header,
          {
            backgroundColor,
            paddingTop:
              Platform.OS === 'android' && !translucent
                ? StatusBar.currentHeight
                : 0,
          },
        ]}>
        {/* Back Button */}
        {showBackButton && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginLeft: 16,
            }}>
            <Image
              source={icons.BACK_ARROW}
              style={{
                width: 24,
                height: 24,
              }}
              tintColor={textColor}
            />
          </TouchableOpacity>
        ) }

        {/* Title or Logo */}
       
          <Text style={{
            color: useColorScheme() === "dark" ? '#fff':'#000',
            fontSize: screen.width*0.065,
            fontWeight: 'bold',
            marginLeft:screen.width*0.06
          }}>{title}</Text>
       

        {/* Right Icon */}
        {showMenu ? (
          <TouchableOpacity
            onPress={() => (navigation as DrawerNavigationProp<any>).toggleDrawer()}
            style={{
              marginRight: 16,
            }}>
            <Image source={icons.DRAWER_ICON} style={{
              width: 24,
              height: 24,
            }} tintColor={rightIconColor} />
          </TouchableOpacity>
        ) : rightIcon ? (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={{
              marginRight: 16,
            }}>
            <Image source={rightIcon} style={{
              width: 24,
              height: 24,
            }} />
          </TouchableOpacity>
        ) : (
          <View style={{

            marginRight: 16,
          }} />
        )}
      </View>
    </>
  );
};

export default CustomHeader;
