import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomTabButton = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View style={styles.wrapper}>{children}</View>
    </TouchableOpacity>
  );
};

export default CustomTabButton;

const styles = StyleSheet.create({
  touchable: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e32f45',
    color: '#ffffff',
  },
});
