import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MapScreenHeader = ({location}) => {
  return (
    <View style={styles.header}>
      <View style={styles.locationWrapper}>
        <Text style={styles.headerTitle}>Detected location</Text>
        <Text style={styles.headerLocation}>Tashkent, Uzbekistan</Text>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableWithoutFeedback>
          <Ionicons name="menu" size={24} color={'#7D818A'} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default MapScreenHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 18,
  },
  locationWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#7D818A',
  },
  headerLocation: {
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 4,
    color: '#000',
  },
  menuWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
