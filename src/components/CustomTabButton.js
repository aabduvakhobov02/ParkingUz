import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import {launchCamera} from 'react-native-image-picker';

import {useScanScreenContext} from '../hooks/useScanScreenContext';

const CustomTabButton = ({children, onPress}) => {
  const {setImage} = useScanScreenContext();

  const openCamera = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    await launchCamera(options, res => {
      setImage(res);
    });
  };

  return (
    <View style={styles.touchable}>
      <TouchableNativeFeedback
        onPress={() => {
          onPress();
          openCamera();
        }}>
        <View style={styles.wrapper}>{children}</View>
      </TouchableNativeFeedback>
    </View>
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
