import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {globalStyles} from '../../styles/global';

const SettingsListItem = ({item, pressHandler}) => {
  return (
    <TouchableHighlight
      onPress={pressHandler}
      key={item.id}
      style={styles.container}>
      <View style={[styles.item, styles.shadow]}>
        <View style={styles.itemName}>
          <Ionicons name={`${item.iconName}`} size={24} color={'#1D3557'} />
          <Text style={[globalStyles.text, styles.text]}>{item.text}</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color={'#e32f45'} />
      </View>
    </TouchableHighlight>
  );
};

export default SettingsListItem;

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
    height: 65,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },
  itemName: {
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingLeft: 10,
  },
});
