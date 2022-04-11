import React, {useState, useEffect} from 'react';

import {ParkingContext} from '../contexts/parkingContext';

import {isPropertiesAreValid} from '../utilities/validationUtils';

const ParkingContextProvider = ({children}) => {
  const [price, setPrice] = useState(null);
  const [hour, setHour] = useState(null);
  const [description, setDescription] = useState(null);
  const [name, setName] = useState();
  const [size, setSize] = useState();
  const [address, setAddress] = useState();
  const [location, setLocation] = useState();
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    if (isPropertiesAreValid([price, hour, name, size, address, location])) {
      setIsCalculated(true);
      return;
    }

    setIsCalculated(false);
  }, [price, hour, name, size, address, location]);

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
      }}>
      {children}
    </ParkingContext.Provider>
  );
};

export default ParkingContextProvider;
