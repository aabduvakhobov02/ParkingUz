import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 16}}>Settings Screen</Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
