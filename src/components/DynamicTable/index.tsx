import React from 'react';
import {
  View,
  Text,
  ScrollView,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useStyles from './style';
import { screen } from '../../utils/constant';

interface DynamicTableProps {
  tableHeaders?: string[];
}

// Define only real data columns
// const tableHeaders = ['Product Name', 'Quantity', 'Price'];

// Dummy data
const dummyData = [
  { name: 'TS Customer v1 C1',email:'ts.c1.v1@sisqs.co.uk', phone:'+1233333333',activeSiteLinks:'Test',quantity: 2, price: '$1999' },
 
];

const DynamicTable: React.FC<DynamicTableProps> = ({ tableHeaders }) => {
  const navigation = useNavigation();
  const { styles } = useStyles();
  const isDark = useColorScheme();

  return (
    <View style={{
      marginTop:screen.height*0.02
    }}>
      {/* Horizontal ScrollView wraps the whole table */}
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View>
          {/* Table Header */}
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#00BFFF',
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            {tableHeaders?.map((headingText, index) => (
              <Text
                key={index}
                style={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  fontSize: 16,
                  width: 140,
                  marginHorizontal: 5,
                  textTransform: 'uppercase',
                  textAlign:'center'
                }}
              >
                {headingText}
              </Text>
            ))}

            {/* Fixed Action Header */}
            <Text
              style={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: 16,
                width: 140,
                marginHorizontal: 5,
                textTransform: 'uppercase',
                textAlign:'center'
              }}
            >
              Action
            </Text>
          </View>

          {/* Vertical ScrollView for rows */}
          <ScrollView style={{ maxHeight: screen.height*0.9, }}>
            {dummyData.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderBottomWidth: 1,
                  borderColor: '#ccc',
                  backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
                }}
              >
                <Text style={{ width: 140, marginHorizontal: 5,textAlign:'center' }}>{item.name}</Text>
                <Text style={{ width: 140, marginHorizontal: 5,textAlign:'center' }}>{item.email}</Text>
                <Text style={{ width: 140, marginHorizontal: 5,textAlign:'center' }}>{item.phone}</Text>
                <Text style={{ width: 140, marginHorizontal: 5,textAlign:'center' }}>{item.activeSiteLinks}</Text>

                {/* Fixed Action Buttons */}
                <View style={{ flexDirection: 'row', width: 140 ,alignItems:'center' ,justifyContent:'center' }}>
                  <TouchableOpacity
                    onPress={() => alert(`Edit ${item.name}`)}
                    style={{ marginRight: 10 }}
                  >
                    <Text style={{ color: '#00BFFF' }}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => alert(`Delete ${item.name}`)}>
                    <Text style={{ color: 'red' }}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* Optional Footer */}
      <Text style={{ marginTop: 20, fontSize: 16 }}>
        Hello From Dynamic Table Component
      </Text>
    </View>
  );
};

export default DynamicTable;
