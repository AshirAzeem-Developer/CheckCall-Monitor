import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import StatusBarComponent from '../../../components/global/StatusBarComponent';
import useStyles from './style';
import icons from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';

const Home = ({}) => {
  const {styles, colors} = useStyles();
  const navigation = useNavigation();

const isDrawerOpen = useDrawerStatus() === 'open';

console.log("Is Drawer Open ", isDrawerOpen)
  return (
    <>
    <View style={{
      flex:1,
      // alignItems:'center',
      // justifyContent:'center'
    }}>

      <StatusBarComponent backgroundColor={colors.BACKGROUND}   />

      <TouchableOpacity
      onPress={()=>{
        
          (navigation as any).openDrawer();
        
      }}
      >
        <Image source={icons.DRAWER_ICON} width={20} height={20} style={{
          width:20,
          height:20,
          position:'absolute',
          top:20,
          left:20,
        }}/>
      </TouchableOpacity>
    </View>
    </>
  );
};

export default Home;
