import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import MapScreen from './MapScreen';

const {height, width} = Dimensions.get('screen');
const parkings = [
  {
    id: 1,
    title: 'Parking 1',
    price: 5,
    rating: 4.2,
    spots: 20,
    free: 10,
    coordinate: {
      latitude: 37.78735,
      longitude: -122.4334,
    },
    description: `Description about this parking lot
Open year 2018
Secure with CTV`,
  },
  {
    id: 2,
    title: 'Parking 2',
    price: 7,
    rating: 3.8,
    spots: 25,
    free: 20,
    coordinate: {
      latitude: 37.78845,
      longitude: -122.4344,
    },
    description: `Description about this parking lot
Open year 2014
Secure with CTV`,
  },
  {
    id: 3,
    title: 'Parking 3',
    price: 10,
    rating: 4.9,
    spots: 50,
    free: 25,
    coordinate: {
      latitude: 37.78615,
      longitude: -122.4314,
    },
    description: `Description about this parking lot
Open year 2019
Secure with CTV`,
  },
];

const EndUserScreens = () => {
  return (
    <>
      <MapScreen />
    </>
  );
};

export default EndUserScreens;

const styles = StyleSheet.create({});
