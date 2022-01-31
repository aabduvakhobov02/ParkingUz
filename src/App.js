import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import TabBar from './components/TabBar';

import ScanScreenContextProvider from './contextProviders/ScanScreenContextProvider';

export default function App() {
  return (
    <NavigationContainer>
      <ScanScreenContextProvider>
        <TabBar />
      </ScanScreenContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
