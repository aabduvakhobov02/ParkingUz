import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

import Logo from '../../components/Logo';
import StatsCard from '../../components/StatsCard';
import ButtonWithIcon from '../../components/ButtonWithIcon';

import Background from '../../images/homeBackground.jpg';
import MoneyIcon from '../../../assets/icons/money.png';
import CarsIcon from '../../../assets/icons/cars.png';

const HomeScreen = ({navigation}) => {
  return (
    <>
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
              value="40 cars"
            />
          </View>
        </ImageBackground>
        <View style={styles.body}>
          <Text style={styles.header}>Statistics by place</Text>
          <View style={styles.bodyCardsWrapper}>
            <StatsCard
              value="32"
              title={'Cars in the parking lot'}
              shadow={styles.shadow}
            />
            <StatsCard
              value="8"
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
    </>
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
