import React, {useState, useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import isNull from 'lodash/isNull';

import {AuthContext} from '../contexts/authContext';
import {firebaseAuth} from '../services/authService';
import {getAllUsers} from '../services/userService';

const AuthContextProvider = ({children}) => {
  const [user, isUserLoading, onUserError] = useAuthState(firebaseAuth);

  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (!isNull(user?.role)) {
      setUserRole(user?.role);
      return;
    }
    setUserRole(null);
  }, [JSON.stringify(user)]);

  return (
    <AuthContext.Provider
      value={{
        user,
        userRole,
        setUserRole,
        isUserLoading,
        onUserError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
