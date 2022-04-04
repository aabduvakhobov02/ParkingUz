import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import TabBar from '../components/TabBar';
import FirstEntranceScreens from './firstEntranceScreens/FirstEntranceScreens';
import EndUserScreens from './endUserScreens/EndUserScreens';

const Routes = () => {
  return (
    <NavigationContainer>
      <TabBar />
      {/* <FirstEntranceScreens /> */}
      {/* <EndUserScreens /> */}
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
