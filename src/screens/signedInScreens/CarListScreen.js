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
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import StatsCard from '../../components/StatsCard';
import InputWithIcon from '../../components/InputWithIcon';

import Background from '../../images/homeBackground.jpg';
import CarItem from '../../components/CarItem';
import CarListScreenHeader from '../../components/CarListScreenComponents/CarListScreenHeader';

const CarListScreen = ({navigation}) => {
  const [carList, setCarList] = useState([
    {
      id: 1,
      number: '01 O 435 MB',
      createdAt: '1647992225',
    },
    {
      id: 2,
      number: '01 B 989 XA',
      createdAt: '1647992444',
    },
    {
      id: 3,
      number: '01 B 989 XA',
      createdAt: '1647992444',
    },
    {
      id: 4,
      number: '01 B 989 XA',
      createdAt: '1647992444',
    },
    {
      id: 5,
      number: '01 B 989 XA',
      createdAt: '1647992444',
    },
    {
      id: 6,
      number: '01 B 989 XA',
      createdAt: '1647992444',
    },

    {
      id: 7,
      number: '01 B 989 XA',
      createdAt: '1647992444',
    },
    {
      id: 8,
      number: '01 B 989 XA',
      createdAt: '1647992444',
    },
    {
      id: 9,
      number: '01 B 989 XA',
      createdAt: '1647992444',
    },
  ]);
  const pressHandler = () => {
    console.log('Clikced');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={carList}
        renderItem={({item}) => <CarItem carInfo={item} />}
        style={{marginBottom: 100}}
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
  );
};

export default CarListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  body: {
    flex: 2,
    paddingVertical: 20,
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
