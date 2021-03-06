import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Alert,
} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

import ButtonWithIcon from '../../components/ButtonWithIcon';

import {useParkingContext} from '../../hooks/useParkingContext';
import {useBeManualFetcher} from '../../hooks/useBeManualFetcher';
import {createParkingLot} from '../../repositories/parkingLotRepository';

import backgroundImage from '../../images/coverBackground.jpg';
import MapPin from '../../../assets/icons/map-pin.png';
import InputWithIcon from '../../components/InputWithIcon';

const EnterAddressScreen = () => {
  const {
    price,
    description,
    name,
    size,
    address,
    location,
    setLocation,
    setIsCalculated,
    setParkingId,
  } = useParkingContext();
  const [onFetch] = useBeManualFetcher();
  const {t} = useTranslation();

  const errorAlert = err =>
    Alert.alert('Something went wrong', `${err}`, [{text: 'Close'}]);

  const onSubmit = async () => {
    const body = {
      size: size,
      name: name,
      description: description,
      serviceCost: {
        hour: 1,
        price: {
          amount: price,
          currency: 'UZ',
        },
      },
      address: {
        city: address?.city,
        district: address?.district,
        street: address?.street,
        point: {
          longitude: location?.longitude,
          latitude: location?.latitude,
        },
      },
    };

    await onFetch({
      action: async () => await createParkingLot(body),
      onLoad: async result => {
        try {
          await AsyncStorage.setItem('ParkingId', `${result?.id}`).then(() =>
            setParkingId(result.id),
          );
          await AsyncStorage.setItem('IsCalculated', 'true').then(() =>
            setIsCalculated(prev => true),
          );
        } catch (error) {
          errorAlert(error);
        }
      },
      successMessage: 'Parking Lot created succesfully',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMethod="resize"
        style={styles.backgroundImage}>
        <View style={styles.body}>
          <Text style={styles.title}>{t('Enter parking lot address')}</Text>
          <InputWithIcon
            iconName={'search'}
            placeholder={'Search'}
            style={styles.input}
          />
          <View style={styles.mapWrapper}>
            <MapView
              draggable={true}
              style={styles.map}
              initialRegion={{
                ...location,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0191,
              }}
              onPress={e => setLocation(e.nativeEvent.coordinate)}
              showsMyLocationButton={true}
              showsUserLocation={true}>
              <Marker
                coordinate={location}
                image={MapPin}
                style={styles.marker}
              />
            </MapView>
          </View>
        </View>
        <ButtonWithIcon
          style={styles.button}
          text={'Continue'}
          icon={'arrow-forward-outline'}
          onPress={onSubmit}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default EnterAddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    padding: 20,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: '700',
    fontSize: 35,
    color: '#000',

    marginBottom: 15,
  },
  input: {
    marginBottom: 20,
  },
  mapWrapper: {
    overflow: 'hidden',
    borderRadius: 18,
  },
  map: {
    width: 350,
    height: 450,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    marginTop: 25,
  },
});
