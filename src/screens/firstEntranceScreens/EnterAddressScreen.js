import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';

import ButtonWithIcon from '../../components/ButtonWithIcon';
import InputWithLabel from '../../components/InputWithLabel';

import backgroundImage from '../../images/coverBackground.jpg';
import MapPin from '../../../assets/icons/map-pin.png';
import InputWithIcon from '../../components/InputWithIcon';

const EnterAddressScreen = ({navigation}) => {
  const [location, setLocation] = useState({
    latitude: 41.305852,
    longitude: 69.280962,
  });
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMethod="resize"
        style={styles.backgroundImage}>
        <View style={styles.body}>
          <Text style={styles.title}>Enter parking lot address</Text>
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
                latitude: 41.305852,
                longitude: 69.280962,
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
          onPress={() => navigation.navigate('EnterAddress')}
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
