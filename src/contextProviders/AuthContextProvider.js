import React, {useState, useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthContext} from '../contexts/authContext';
import {firebaseAuth} from '../services/authService';

const AuthContextProvider = ({children}) => {
  const [user, isUserLoading, onUserError] = useAuthState(firebaseAuth);
  const [isEndUser, setIsEndUser] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await AsyncStorage.getItem('isEndUser').then(value => {
        if (value === 'true') {
          setIsEndUser(true);
          return;
        }
        setIsEndUser(false);
      });
    } catch (err) {}
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isUserLoading,
        onUserError,
        isEndUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
