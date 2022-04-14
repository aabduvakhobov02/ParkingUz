import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import TabBar from '../components/TabBar';
import FirstEntranceScreens from './firstEntranceScreens/FirstEntranceScreens';
import EndUserScreens from './endUserScreens/EndUserScreens';

import {useAuthContext} from '../hooks/useAuthContext';
import {useParkingContext} from '../hooks/useParkingContext';
import MainScreens from './signedInScreens/MainScreens';

const Routes = () => {
  const {user, isUserLoading, isEndUser} = useAuthContext();
  const {isCalculated} = useParkingContext();

  return (
    <NavigationContainer>
      {isEndUser ? (
        <EndUserScreens />
      ) : !user || !isCalculated ? (
        <FirstEntranceScreens />
      ) : (
        <MainScreens />
      )}
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
