import React, {useState, useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthContext} from '../contexts/authContext';
import {firebaseAuth, getUserRoles} from '../services/authService';

const AuthContextProvider = ({children}) => {
  const [user, isUserLoading, onUserError] = useAuthState(firebaseAuth);
  const [isEndUser, setIsEndUser] = useState(null);
  const [userRoles, setUserRoles] = useState();

  useEffect(() => {
    getUserRole();
  }, [JSON.stringify(user)]);

  const getUserRole = async () => {
    if (user) {
      const groups = await getUserRoles();
      setUserRoles(groups);
    }
  };

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
        userRoles,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
