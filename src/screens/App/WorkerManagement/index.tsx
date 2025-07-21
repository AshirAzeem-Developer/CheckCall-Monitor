import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import StatusBarComponent from '../../../components/global/StatusBarComponent';
import useStyles from './style';
import icons from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import CustomHeader from '../../../components/CustomHeader';

const WorkersList = ({}) => {
  const {styles, colors} = useStyles();
  const navigation = useNavigation();

  return (
    <>
      <CustomHeader title='Workers List'  showMenu backgroundColor={'transparent'}
      rightIconColor={colors.TEXT}
  
      />
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>

     <Text>
      This is Hello From Drawer WorkersList Screen
     </Text>

  
    </View>
    </>
  );
};

export default WorkersList;
