import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/logo.png')}
        style={styles.Image}
      />
      <Text style={styles.logoText}>Parking.uz</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  Image: {
    width: 20,
    height: 24,
  },
  logoText: {fontWeight: 'bold', marginLeft: 5, color: '#1D3557', fontSize: 24},
});
