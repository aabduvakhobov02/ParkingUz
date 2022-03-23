import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import React from 'react';

import {unixTimeConvertor} from '../utilities/dateTimeUtils';

import {globalStyles} from '../styles/global';

const CarItem = ({carInfo, pressHandler}) => {
  return (
    <TouchableHighlight
      onPress={pressHandler}
      key={carInfo.id}
      style={styles.container}>
      <View style={[styles.item, styles.shadow]}>
        <Text style={[globalStyles.text, styles.text]}>{carInfo.number}</Text>
        <Text style={globalStyles.text}>
          {unixTimeConvertor(carInfo.createdAt)}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },
  shadow: {
    shadowColor: '#9A9A9A',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.5,
    elevation: 10,
  },
  text: {
    color: '#1D3557',
  },
});
