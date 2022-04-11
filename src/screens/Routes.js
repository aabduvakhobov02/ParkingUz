import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import TabBar from '../components/TabBar';
import FirstEntranceScreens from './firstEntranceScreens/FirstEntranceScreens';
import EndUserScreens from './endUserScreens/EndUserScreens';

import {useAuthContext} from '../hooks/useAuthContext';
import {useParkingContext} from '../hooks/useParkingContext';

const Routes = () => {
  const {user, isUserLoading} = useAuthContext();
  return (
    <NavigationContainer>
      {!user ? <FirstEntranceScreens /> : <TabBar />}
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
