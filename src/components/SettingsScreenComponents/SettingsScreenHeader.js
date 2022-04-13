import {StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import StatsCard from '../StatsCard';
import InputWithIcon from '../InputWithIcon';

import Background from '../../images/homeBackground.jpg';

const SettingsScreenHeader = ({navigation}) => {
  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.backgroundImage}
      imageStyle={{
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
      }}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={20} color={'#1D3557'} />
        <Text style={styles.backText}>Back</Text>
      </Pressable>
      <View style={styles.cardWrapper}>
        <Text style={styles.header}>Settings</Text>
      </View>
    </ImageBackground>
  );
};

export default SettingsScreenHeader;

const styles = StyleSheet.create({
  backgroundImage: {
    padding: 20,
    height: 180,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backText: {
    fontSize: 16,
    color: '#1D3557',
    marginLeft: 5,
  },
  cardWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: 25,
    fontWeight: '700',
    color: '#1D3557',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
