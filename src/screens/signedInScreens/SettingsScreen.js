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
import SettingsScreenHeader from '../../components/SettingsScreenComponents/SettingsScreenHeader';
import SettingsListItem from '../../components/SettingsScreenComponents/SettingsListItem';

const CarListScreen = ({navigation}) => {
  const [carList, setCarList] = useState([
    {
      id: 1,
      text: 'Edit Parking Details',
      iconName: 'create-outline',
    },
    {
      id: 2,
      text: 'Log out',
      iconName: 'log-out-outline',
    },
  ]);
  const pressHandler = () => {
    console.log('Clikced');
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={carList}
        renderItem={({item}) => <SettingsListItem item={item} />}
        style={{marginBottom: 100}}
        ListHeaderComponent={
          <>
            <SettingsScreenHeader navigation={navigation} />
            <View style={styles.body}></View>
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
    paddingVertical: 15,
  },
  header: {
    marginTop: 15,
    fontWeight: '500',
    fontSize: 18,
    color: '#1D3557',
    paddingHorizontal: 20,
  },
});
