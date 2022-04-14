import {StyleSheet} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import SettingsScreen from './SettingsScreen';
import UpdateParkingDetailsScreen from './UpdateParkingDetailsScreen';

const Stack = createStackNavigator();

const SettingsScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen
        name="UpdateParkingDetailsScreen"
        component={UpdateParkingDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingsScreens;

const styles = StyleSheet.create({});
