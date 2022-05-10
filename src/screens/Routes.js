import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import TabBar from '../components/TabBar';
import FirstEntranceScreens from './firstEntranceScreens/FirstEntranceScreens';
import EndUserScreens from './endUserScreens/EndUserScreens';

import {useAuthContext} from '../hooks/useAuthContext';
import {useParkingContext} from '../hooks/useParkingContext';
import MainScreens from './signedInScreens/MainScreens';

const Stack = createStackNavigator();

const Routes = () => {
  const {user, userRoles} = useAuthContext();
  const {isCalculated} = useParkingContext();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          animationEnabled: true,
        }}>
        {!user || !isCalculated ? (
          <Stack.Screen
            name="FirstEntranceScreens"
            component={FirstEntranceScreens}
          />
        ) : user && userRoles === 'OCR:ADMIN' && isCalculated ? (
          <Stack.Screen name="MainScreens" component={MainScreens} />
        ) : (
          user &&
          userRoles === 'OCR:USER' && (
            <Stack.Screen name="EndUserScreens" component={EndUserScreens} />
          )
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
