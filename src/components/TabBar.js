import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeTabScreen from '../screens/tabScreens/HomeTabScreen';
import SettingsScreen from '../screens/signedInScreens/SettingsScreen';
import ScanScreen from '../screens/signedInScreens/ScanScreen';
import CustomTabButton from './CustomTabButton';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          borderRadius: 15,
          backgroundColor: '#ffffff',
          height: 80,
          elevation: 0,
          left: 20,
          right: 20,
          bottom: 20,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name={'Home'}
        component={HomeTabScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons
                name={'home'}
                size={25}
                color={focused ? '#e32f45' : '#748c94'}
              />
              <Text style={{color: focused ? '#e32f45' : '#748c94'}}>Home</Text>
            </View>
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name={'Scan'}
        component={ScanScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name={'scan'} size={30} color={'#ffffff'} />
          ),
          tabBarButton: ({children, onPress}) => (
            <CustomTabButton
              children={children}
              onPress={onPress}
              style={styles.shadow}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name={'Settings'}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons
                name={'settings'}
                size={30}
                color={focused ? '#e32f45' : '#748c94'}
              />
              <Text style={{color: focused ? '#e32f45' : '#748c94'}}>
                Settings
              </Text>
            </View>
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
