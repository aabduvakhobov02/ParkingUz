import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SettingsScreenHeader from '../../components/SettingsScreenComponents/SettingsScreenHeader';
import SettingsListItem from '../../components/SettingsScreenComponents/SettingsListItem';

import {signOut} from '../../services/authService';
import {useStatusContext} from '../../hooks/useStatusContext';
import {useParkingContext} from '../../hooks/useParkingContext';

const SettingsScreen = ({navigation}) => {
  const [list, setList] = useState([
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
  const {onErrorStatus} = useStatusContext();
  const {setIsCalculated, setParkingId} = useParkingContext();

  const pressHandler = async id => {
    if (id === 1) {
      navigation.navigate('UpdateParkingDetailsScreen');
      return;
    }

    if (id === 2) {
      try {
        await signOut();
      } catch (error) {
        onErrorStatus(error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <SettingsListItem item={item} pressHandler={pressHandler} />
        )}
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

export default SettingsScreen;

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
