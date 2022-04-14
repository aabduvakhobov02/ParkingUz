import React, {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ParkingContext} from '../contexts/parkingContext';
import {getParkingLotById} from '../repositories/parkingLotRepository';
import {useBeManualFetcher} from '../hooks/useBeManualFetcher';
import {isEmpty} from 'lodash';

const ParkingContextProvider = ({children}) => {
  const [onFetch] = useBeManualFetcher();
  const [parkingId, setParkingId] = useState(null);
  const [price, setPrice] = useState(null);
  const [hour, setHour] = useState(null);
  const [description, setDescription] = useState(null);
  const [name, setName] = useState();
  const [size, setSize] = useState();
  const [address, setAddress] = useState();
  const [location, setLocation] = useState({
    latitude: 41.305852,
    longitude: 69.280962,
  });
  const [isCalculated, setIsCalculated] = useState(false);

  const fetchData = async () => {
    try {
      await AsyncStorage.getItem('IsCalculated').then(value => {
        if (value === 'true') {
          setIsCalculated(true);
          return;
        }
        setIsCalculated(false);
      });
    } catch (error) {}
  };

  const getParkingId = async () => {
    try {
      await AsyncStorage.getItem('ParkingId').then(result => {
        setParkingId(result);
      });
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
    getParkingId();
  }, []);

  console.log(isCalculated, parkingId);

  return (
    <ParkingContext.Provider
      value={{
        price,
        hour,
        name,
        size,
        address,
        location,
        description,
        setPrice,
        setAddress,
        setHour,
        setName,
        setSize,
        setLocation,
        setDescription,
        isCalculated,
        setIsCalculated,
      }}>
      {children}
    </ParkingContext.Provider>
  );
};

export default ParkingContextProvider;
