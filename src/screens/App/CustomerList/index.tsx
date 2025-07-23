import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import StatusBarComponent from '../../../components/global/StatusBarComponent';
import useStyles from './style';
import icons from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import CustomHeader from '../../../components/CustomHeader';
import DynamicTable from '../../../components/DynamicTable';

const CustomersList = ({}) => {
  const {styles, colors} = useStyles();
  const navigation = useNavigation();
  const titles:string[] = ['Customer Name' , 'Email' , 'Phone' , 'Active Linked Sites'] 

  return (
    <>
      <CustomHeader title='Customer List'  showMenu backgroundColor={'transparent'}
      rightIconColor={colors.TEXT}
  
      />
    <View style={{
      padding:'5%'
    }}>

     <Text>
      This is Hello From Drawer CustomersList Screen
     </Text>
     <DynamicTable tableHeaders={titles}/>

  
    </View>
    </>
  );
};

export default CustomersList;
