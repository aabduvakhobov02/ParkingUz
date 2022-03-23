import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import LanguageSelectionScreen from './LanguageSelectionScreen';
import WelcomeScreen from './WelcomeScreen';
import SignInScreen from './SignInScreen';
import FillInformationFormScreen from './FillInformationFormScreen';
import EnterAddressScreen from './EnterAddressScreen';

const Stack = createStackNavigator();

const FirstEntranceScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}>
      <Stack.Screen
        name="LanguageSelection"
        component={LanguageSelectionScreen}
      />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen
        name="FillInformationForm"
        component={FillInformationFormScreen}
      />
      <Stack.Screen name="EnterAddress" component={EnterAddressScreen} />
    </Stack.Navigator>
  );
};

export default FirstEntranceScreens;

const styles = StyleSheet.create({});
