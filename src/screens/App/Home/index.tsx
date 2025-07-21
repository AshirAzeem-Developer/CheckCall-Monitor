import React from 'react';
import {Image, Text, TouchableOpacity, useColorScheme, View} from 'react-native';
import StatusBarComponent from '../../../components/global/StatusBarComponent';
import useStyles from './style';
import icons from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import CustomHeader from '../../../components/CustomHeader';
import { screen } from '../../../utils/constant';

const Home = ({}) => {
  const {styles, colors,sizes} = useStyles();
  const navigation = useNavigation();

  return (
    <>
      <CustomHeader  title='Dashboard' showMenu backgroundColor={useColorScheme() === 'dark' ? 'white' :'white'}
      rightIconColor={colors.TEXT}
      />
      <View style={{
        backgroundColor:'white',
        height:screen.height,
        padding:screen.width*0.06

      }}>
<Text>
  Hello
</Text>
      </View>
    
    
    </>
  );
};

export default Home;
