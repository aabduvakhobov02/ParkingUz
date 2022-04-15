import React from 'react';
import {StyleSheet} from 'react-native';
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
  const {user, isUserLoading, isEndUser} = useAuthContext();
  const {isCalculated} = useParkingContext();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          animationEnabled: true,
        }}>
        {isEndUser ? (
          <Stack.Screen name="EndUserScreens" component={EndUserScreens} />
        ) : !user || !isCalculated ? (
          <Stack.Screen
            name="FirstEntranceScreens"
            component={FirstEntranceScreens}
          />
        ) : (
          <Stack.Screen name="MainScreens" component={MainScreens} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
