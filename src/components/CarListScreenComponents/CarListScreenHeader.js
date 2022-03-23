import {StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import StatsCard from '../StatsCard';
import InputWithIcon from '../InputWithIcon';

import Background from '../../images/homeBackground.jpg';

const CarListScreenHeader = ({navigation}) => {
  return (
    <ImageBackground
      source={Background}
      resizeMode="cover"
      style={styles.backgroundImage}
      imageStyle={{
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
      }}>
      <View style={styles.ellipse} />
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={20} color={'#1D3557'} />
        <Text style={styles.backText}>Back</Text>
      </Pressable>
      <View style={styles.cardWrapper}>
        <InputWithIcon
          placeholder="Search by car number"
          iconName="search"
          style={styles.input}
        />
        <StatsCard
          style={{justifyContent: 'flex-end'}}
          title={'Parking space'}
          value="32/40"
        />
      </View>
    </ImageBackground>
  );
};

export default CarListScreenHeader;

const styles = StyleSheet.create({
  backgroundImage: {
    padding: 20,
    height: 270,
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
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  },
  input: {
    marginBottom: 10,
  },
  ellipse: {
    position: 'absolute',
    width: 200,
    height: 200,
    top: 65,
    left: -150,
    backgroundColor: '#E63946',
    borderRadius: 100,
  },
});
