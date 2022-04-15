import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useCallback} from 'react';

import Logo from '../../components/Logo';
import StatsCard from '../../components/StatsCard';
import ButtonWithIcon from '../../components/ButtonWithIcon';
import Fetcher from '../../components/FetcherComponent';

import {useParkingContext} from '../../hooks/useParkingContext';
import {getParkingById} from '../../services/parkingLotService';
import {getCars} from '../../services/vehicleService';

import Background from '../../images/homeBackground.jpg';
import MoneyIcon from '../../../assets/icons/money.png';
import CarsIcon from '../../../assets/icons/cars.png';

const HomeScreen = ({navigation}) => {
  const {
    size,
    parkingId,
    carList,
    setPrice,
    setAddress,
    setHour,
    setName,
    setSize,
    setLocation,
    setDescription,
    setCarList,
  } = useParkingContext();

  const fetchParkingLotDetails = useCallback(
    async () => await getParkingById(parkingId),
    [parkingId],
  );

  const handleOnLoadFetchedDetails = useCallback(result => {
    setPrice(result?.serviceCost?.price?.amount);
    setAddress(result?.setAddress);
    setHour(result?.serviceCost?.hour);
    setName(result?.name);
    setSize(result?.size);
    setLocation(result?.address?.point);
    setDescription(result?.description);
  }, []);

  const fetchCars = useCallback(
    async () => await getCars(parkingId),
    [parkingId],
  );

  const handleOnLoadFetchedCars = useCallback(result => {
    setCarList(prev => result);
  }, []);

  return (
    <Fetcher
      action={fetchParkingLotDetails}
      onLoad={handleOnLoadFetchedDetails}>
      <Fetcher action={fetchCars} onLoad={handleOnLoadFetchedCars}>
        <View style={styles.container}>
          <ImageBackground
            source={Background}
            resizeMode="cover"
            style={styles.backgroundImage}
            imageStyle={{
              borderBottomRightRadius: 24,
              borderBottomLeftRadius: 24,
            }}>
            <Logo />
            <View style={styles.cardWrapper}>
              <StatsCard
                style={{marginBottom: 10}}
                value="876 000 soum"
                title={'Daily income'}
                icon={MoneyIcon}
              />
              <StatsCard
                style={{marginLeft: 10}}
                value="289 cars"
                title={'Daily attendance'}
                icon={CarsIcon}
              />
              <StatsCard
                style={{width: '100%'}}
                title={'Overall parking space'}
                value={`${size} cars`}
              />
            </View>
          </ImageBackground>
          <View style={styles.body}>
            <Text style={styles.header}>Statistics by place</Text>
            <View style={styles.bodyCardsWrapper}>
              <StatsCard
                value={`${carList.length}`}
                title={'Cars in the parking lot'}
                shadow={styles.shadow}
              />
              <StatsCard
                value={`${parseFloat(size) - parseFloat(carList.length)}`}
                title={'Empty parking spaces'}
                shadow={styles.shadow}
              />
            </View>
            <ButtonWithIcon
              text={'View all'}
              icon={'arrow-forward-outline'}
              onPress={() => navigation.navigate('CarListScreen')}
            />
          </View>
        </View>
      </Fetcher>
    </Fetcher>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1.1,
    padding: 20,
  },
  body: {
    flex: 2,
    padding: 20,
  },
  cardWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: '100%',
  },
  header: {
    marginTop: 15,
    fontWeight: '700',
    fontSize: 18,
    color: '#1D3557',
    marginBottom: 10,
  },
  bodyCardsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});
