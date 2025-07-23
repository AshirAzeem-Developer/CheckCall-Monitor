import React from 'react';
import {
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import StatusBarComponent from '../../../components/global/StatusBarComponent';
import useStyles from './style';
import icons from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';
import CustomHeader from '../../../components/CustomHeader';
import { screen } from '../../../utils/constant';

const Home = ({}) => {
  const { styles, colors, sizes } = useStyles();
  const navigation = useNavigation();

  return (
    <>
      <CustomHeader
        title="Dashboard"
        showMenu
        backgroundColor={useColorScheme() === 'dark' ? 'white' : 'white'}
        rightIconColor={colors.TEXT}
      />
      
      {/* Refresh Section */}
      <View style={styles.refreshContainer}>
        <TouchableOpacity style={styles.refreshButton} activeOpacity={0.7}>
          <View style={styles.refreshIconContainer}>
            <Text style={styles.refreshIcon}>🔄</Text>
          </View>
          <Text style={styles.refreshText}>Refresh (3:14)</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {/* ID Section */}
        <View style={styles.idSection}>
          <Text style={styles.idText}>247865 - TS1 C1 S1 W1</Text>
          <TouchableOpacity style={styles.moreButton}>
            <Text style={styles.moreButtonText}>⋮</Text>
          </TouchableOpacity>
        </View>

        {/* Info Cards */}
        <View style={styles.infoContainer}>
          {/* Contact Info Card */}
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Phone:</Text>
              <TouchableOpacity>
                <Text style={styles.infoValue}>+12017827777</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Email:</Text>
              <TouchableOpacity>
                <Text style={styles.infoValue}>ts1.c1s1w1@sisqs.co.uk</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Status Info Card */}
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Check In:</Text>
              <Text style={styles.infoValue}>30 mins</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Man Down:</Text>
              <View style={styles.statusContainer}>
                <View style={[styles.statusDot, styles.statusOff]} />
                <Text style={styles.infoValue}>Off</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Monitors Section */}
        <View style={styles.monitorsSection}>
          <Text style={styles.monitorsTitle}>Monitors:</Text>
          <View style={styles.monitorsContent}>
            <Text style={styles.monitorsPlaceholder}>No monitors configured</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;