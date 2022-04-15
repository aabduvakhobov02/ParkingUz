import React, {useState, useCallback} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import MapScreenHeader from '../../components/EndUserMapScreenComponents/MapScreenHeader';
import MapScreenBody from '../../components/EndUserMapScreenComponents/MapScreenBody';
import MapScreenModal from '../../components/EndUserMapScreenComponents/MapScreenModal';

import {getAllParkingLots} from '../../services/parkingLotService';

import parkingFinderLogo from '../../images/parkingFinderLogo.png';
import * as theme from '../../utilities/theme';
import Background from '../../images/homeBackground.jpg';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

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
      latitude: 41.313844121058686,
      longitude: 69.2858375264419,
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
      latitude: 41.321940097115295,
      longitude: 69.27596066192854,
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
      latitude: 41.30614137881865,
      longitude: 69.28147171359446,
    },
    description: `Description about this parking lot
Open year 2019
Secure with CTV`,
  },
];

const MapScreen = () => {
  const [parkingLots, setParkingLots] = useState([]);
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

  const fetchParkingLots = useCallback(
    async () => await getAllParkingLots(),
    [],
  );

  const handleOnLoadFetchedParkingLots = useCallback(result => {
    setParkingLots(prev => result);
  }, []);

  return (
    // <Fetcher action={fetchParkingLots} onLoad={handleOnLoadFetchedParkingLots}>
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
          return (
            <TouchableWithoutFeedback
              key={`parking-${item.id}`}
              onPress={() => setIsActive(item.id)}>
              <View style={[styles.parking, styles.shadow]}>
                <View style={styles.detailsWrapper}>
                  <Text style={styles.parkingName}>Parking 1</Text>
                  <View style={styles.valuesWrapper}>
                    <Ionicons
                      name="radio-button-on-outline"
                      size={20}
                      color={'#E63946'}
                    />
                    <Text style={styles.title}>Parking Capacity:</Text>
                    <Text style={styles.value}>30</Text>
                  </View>
                  <View style={styles.valuesWrapper}>
                    <Ionicons
                      name="radio-button-off-outline"
                      size={20}
                      color={'#E63946'}
                    />
                    <Text style={styles.title}>Available Spots:</Text>
                    <Text style={styles.value}>30</Text>
                  </View>
                  <View style={styles.valuesWrapper}>
                    <Ionicons
                      name="pricetag-outline"
                      size={20}
                      color={'#E63946'}
                    />
                    <Text style={styles.title}>Price Per Hour:</Text>
                    <Text style={styles.value}>3000 UZS</Text>
                  </View>
                </View>
                <TouchableNativeFeedback onPress={() => setActiveModal(item)}>
                  <View style={styles.buy}>
                    <Ionicons
                      name="chevron-forward-outline"
                      size={40}
                      color={'#ffffff'}
                    />
                  </View>
                </TouchableNativeFeedback>
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
            <ImageBackground
              source={Background}
              resizeMode="cover"
              style={styles.modalHeader}>
              <View style={styles.logo}>
                <Image source={parkingFinderLogo} />
              </View>
            </ImageBackground>
            <View style={styles.modalBody}>
              <TouchableOpacity style={styles.listItem} onPress={logOut}>
                <Ionicons
                  name="log-out-outline"
                  size={theme.SIZES.icon * 1.75}
                  color={'#E63946'}
                />
                <Text style={styles.listItemText}>Log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
    // </Fetcher>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.white,
  },
  logo: {
    paddingVertical: 32,
    paddingLeft: 6,
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
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: theme.COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 20,
    marginHorizontal: theme.SIZES.base * 2,
    width: width - 24 * 2,
  },
  buy: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#E63946',
    borderRadius: 20,
    marginBottom: 5,
  },
  valuesWrapper: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#1D3557',
    paddingLeft: 4,
  },
  parkingName: {
    fontSize: 24,
    color: '#1D3557',
    fontWeight: '700',
    paddingBottom: 10,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1D3557',
    paddingLeft: 4,
  },

  shadow: {
    shadowColor: theme.COLORS.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    color: '#1D3557',
  },
});
