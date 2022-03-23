import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import TabBar from '../components/TabBar';
import FirstEntranceScreens from './firstEntranceScreens/FirstEntranceScreens';

const Routes = () => {
  return (
    <NavigationContainer>
      {/* <TabBar /> */}
      <FirstEntranceScreens />
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
