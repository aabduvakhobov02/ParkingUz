import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const MapScreenBody = ({parkings, setIsActive, isActive, setActiveModal}) => {
  const [currentPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
  });

  return (
    <MapView initialRegion={currentPosition} style={styles.map}>
      {parkings.map(parking => (
        <Marker
          key={`marker-${parking.id}`}
          coordinate={parking.coordinate}
          onPress={() => {
            setIsActive(parking.id);
            setActiveModal(parking);
          }}>
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.marker,
                styles.shadow,
                isActive === parking.id ? styles.active : null,
              ]}>
              <Text style={styles.markerPrice}>${parking.price}</Text>
              <Text style={styles.markerStatus}>
                ({parking.free}/{parking.spots})
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </Marker>
      ))}
    </MapView>
  );
};

export default MapScreenBody;

const styles = StyleSheet.create({
  map: {
    flex: 3,
  },
  marker: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#fff',
  },
  markerPrice: {color: '#E63946', fontWeight: 'bold'},
  markerStatus: {color: '#7D818A'},
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  active: {
    borderColor: '#E63946',
  },
});
