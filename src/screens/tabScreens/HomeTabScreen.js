import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import HomeScreen from '../signedInScreens/HomeScreen';
import CarListScreen from '../signedInScreens/CarListScreen';

const Stack = createStackNavigator();

const HomeTabScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CarListScreen" component={CarListScreen} />
    </Stack.Navigator>
  );
};

export default HomeTabScreen;

const styles = StyleSheet.create({});
