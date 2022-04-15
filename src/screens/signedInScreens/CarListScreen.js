import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import StatsCard from '../../components/StatsCard';
import InputWithIcon from '../../components/InputWithIcon';

import Background from '../../images/homeBackground.jpg';
import CarItem from '../../components/CarItem';
import CarListScreenHeader from '../../components/CarListScreenComponents/CarListScreenHeader';
import Fetcher from '../../components/FetcherComponent';
import {useParkingContext} from '../../hooks/useParkingContext';
import {getCars} from '../../services/vehicleService';

const CarListScreen = ({navigation}) => {
  const {parkingId, carList, setCarList} = useParkingContext();
  const pressHandler = () => {
    console.log('Clikced');
  };

  const fetchCars = useCallback(
    async () => await getCars(parkingId),
    [parkingId],
  );

  const handleOnLoadFetchedCars = useCallback(result => {
    setCarList(result);
  }, []);

  return (
    <Fetcher action={fetchCars} onLoad={handleOnLoadFetchedCars}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={carList}
          renderItem={({item}) => <CarItem carInfo={item} />}
          ListHeaderComponent={
            <>
              <CarListScreenHeader navigation={navigation} />
              <View style={styles.body}>
                <Text style={styles.header}>List of cars in the parking</Text>
              </View>
            </>
          }
        />
      </SafeAreaView>
    </Fetcher>
  );
};

export default CarListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    paddingBottom: 20,
  },
  body: {
    flex: 2,
    paddingVertical: 10,
  },
  header: {
    marginTop: 15,
    fontWeight: '700',
    fontSize: 18,
    color: '#1D3557',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
});
