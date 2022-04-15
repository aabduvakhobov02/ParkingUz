import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import TabBar from '../../components/TabBar';
import UpdateParkingDetailsScreen from './UpdateParkingDetailsScreen';
import CarListScreen from './CarListScreen';

const Stack = createStackNavigator();

const MainScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}>
      <Stack.Screen name="Home" component={TabBar} />
      <Stack.Screen
        name="UpdateParkingDetailsScreen"
        component={UpdateParkingDetailsScreen}
      />
      <Stack.Screen name="CarListScreen" component={CarListScreen} />
    </Stack.Navigator>
  );
};

export default MainScreens;

const styles = StyleSheet.create({});
