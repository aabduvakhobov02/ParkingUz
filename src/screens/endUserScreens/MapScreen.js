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
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import MapScreenHeader from '../../components/EndUserMapScreenComponents/MapScreenHeader';
import MapScreenBody from '../../components/EndUserMapScreenComponents/MapScreenBody';
import MapScreenModal from '../../components/EndUserMapScreenComponents/MapScreenModal';

import * as theme from '../../utilities/theme';

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

const MapScreen = () => {
  const [hours, setHours] = useState({});
  const [isActive, setIsActive] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [headerModal, setHeaderModal] = useState(false);
  const navigation = useNavigation();

  const logOut = () => {
    try {
      setHeaderModal(false);
      navigation.reset({
        index: 0,
        routes: [{name: 'LanguageSelection'}],
      });
      AsyncStorage.removeItem('isEndUser');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <MapScreenHeader
        headerModal={headerModal}
        setHeaderModal={setHeaderModal}
      />
      <MapScreenBody
        parkings={parkings}
        isActive={isActive}
        setIsActive={setIsActive}
        setActiveModal={setActiveModal}
      />
      {/* Parkings */}
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollToItem={isActive}
        style={styles.parkings}
        data={parkings}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => {
          const totalPrice = item.price * hours[item.id];
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
                        {item.rating}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.buy}
                    onPress={() => setActiveModal(item)}>
                    <View style={styles.buyTotal}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
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
        }}
      />
      {activeModal && (
        <MapScreenModal
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
      )}
      {headerModal && (
        <Modal
          isVisible
          useNativeDriver
          style={styles.modalContainer}
          backdropColor={theme.COLORS.overlay}
          onBackButtonPress={() => setHeaderModal(false)}
          onBackdropPress={() => setHeaderModal(false)}
          onSwipeComplete={() => setHeaderModal(false)}>
          <View style={styles.modal}>
            <View style={styles.modalHeader}></View>
            <View style={styles.modalBody}>
              <TouchableOpacity style={styles.listItem} onPress={logOut}>
                <Ionicons
                  name="log-out-outline"
                  size={theme.SIZES.icon * 1.75}
                  color={theme.COLORS.black}
                />
                <Text style={styles.listItemText}>Log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.white,
  },
  parkings: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    paddingBottom: 24,
  },
  parking: {
    flexDirection: 'row',
    backgroundColor: theme.COLORS.white,
    borderRadius: 6,
    padding: theme.SIZES.base,
    marginHorizontal: theme.SIZES.base * 2,
    width: width - 24 * 2,
  },
  buy: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: theme.SIZES.base * 1.5,
    paddingVertical: theme.SIZES.base,
    backgroundColor: theme.COLORS.red,
    borderRadius: 6,
  },
  buyTotal: {
    flex: 1,
    justifyContent: 'space-evenly',
    color: '#000',
  },
  buyTotalPrice: {
    color: theme.COLORS.white,
    fontSize: theme.SIZES.base * 2,
    fontWeight: '600',
    paddingLeft: theme.SIZES.base / 4,
  },
  buyBtn: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  marker: {
    flexDirection: 'row',
    backgroundColor: theme.COLORS.white,
    borderRadius: theme.SIZES.base * 2,
    paddingVertical: 12,
    paddingHorizontal: theme.SIZES.base * 2,
    borderWidth: 1,
    borderColor: theme.COLORS.white,
  },
  markerPrice: {color: theme.COLORS.red, fontWeight: 'bold'},
  markerStatus: {color: theme.COLORS.gray},
  shadow: {
    shadowColor: theme.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  active: {
    borderColor: theme.COLORS.red,
  },
  hours: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: theme.SIZES.base / 2,
    justifyContent: 'space-evenly',
  },
  hoursTitle: {
    fontSize: theme.SIZES.text,
    fontWeight: '500',
    color: '#000',
  },
  hoursDropdown: {
    borderRadius: theme.SIZES.base / 2,
    borderColor: theme.COLORS.overlay,
    borderWidth: 1,
    padding: theme.SIZES.base,
    marginRight: theme.SIZES.base / 2,
    color: theme.COLORS.gray,
  },
  hoursDropdownOption: {
    padding: 5,
    fontSize: theme.SIZES.font * 0.8,
    color: '#000',
  },
  hoursDropdownStyle: {
    marginLeft: -theme.SIZES.base,
    paddingHorizontal: theme.SIZES.base / 2,
    marginVertical: -(theme.SIZES.base + 1),
  },
  parkingInfoContainer: {
    flex: 1.5,
    flexDirection: 'row',
  },
  parkingInfo: {
    justifyContent: 'space-evenly',
    marginHorizontal: theme.SIZES.base * 1.5,
  },
  parkingIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  modalContainer: {
    margin: 0,
    justifyContent: 'flex-start',
  },
  modal: {
    flexDirection: 'column',
    height: height,
    width: width * 0.8,

    backgroundColor: theme.COLORS.white,
  },
  modalHeader: {
    flex: 1,
    backgroundColor: '#C1BEC0',
  },
  modalBody: {
    flex: 3,
    padding: theme.SIZES.base * 2,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemText: {
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: '500',
  },
});
