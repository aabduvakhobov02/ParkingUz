import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('screen');

const MapScreenParkingCard = ({item, hours, setActiveModal, setIsActive}) => {
  return (
    <TouchableWithoutFeedback
      key={`parking-${item.id}`}
      onPress={() => setIsActive(item.id)}>
      <View style={[styles.parking, styles.shadow]}>
        <View style={styles.hours}>
          <Text style={styles.hoursTitle}>
            x {item.spots} {item.title}
          </Text>
        </View>
        <View style={styles.parkingInfoContainer}>
          <View style={styles.parkingInfo}>
            <View style={styles.parkingIcon}>
              <Ionicons name="pricetag" size={16} color={'#7D818A'} />
              <Text
                style={{
                  marginLeft: 12,
                  color: '#7D818A',
                }}>
                {' '}
                ${item.price}
              </Text>
            </View>
            <View style={styles.parkingIcon}>
              <Ionicons name="star" size={16} color={'#7D818A'} />
              <Text
                style={{
                  marginLeft: 12,
                  color: '#7D818A',
                }}>
                {' '}
                {item.rating}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buy}
            onPress={() => setActiveModal(item)}>
            <View style={styles.buyTotal}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="cash" size={20} color={'#fff'} />
                <Text style={styles.buyTotalPrice}>{totalPrice}</Text>
              </View>
              <Text style={{color: '#fff'}}>
                {item.price}x{hours[item.id]} hrs
              </Text>
            </View>
            <View style={styles.buyBtn}>
              <Ionicons name="arrow-forward" size={16} color={'#fff'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MapScreenParkingCard;

const styles = StyleSheet.create({
  parking: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 12,
    marginHorizontal: 24,
    width: width - 24 * 2,
  },
  buy: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: '#E63946',
    borderRadius: 6,
  },
  buyTotal: {
    flex: 1,
    justifyContent: 'space-evenly',
    color: '#000',
  },
  buyTotalPrice: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    paddingLeft: 3,
  },
  buyBtn: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  hours: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 6,
    justifyContent: 'space-evenly',
  },
  hoursTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  parkingInfoContainer: {
    flex: 1.5,
    flexDirection: 'row',
  },
  parkingInfo: {
    justifyContent: 'space-evenly',
    marginHorizontal: 18,
  },
  parkingIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
