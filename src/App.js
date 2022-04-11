import React from 'react';
import 'react-native-gesture-handler';

import ScanScreenContextProvider from './contextProviders/ScanScreenContextProvider';
import Routes from './screens/Routes';
import StatusContextProvider from './contextProviders/StatusContextProvider';
import AuthContextProvider from './contextProviders/AuthContextProvider';
import ParkingContextProvider from './contextProviders/ParkingContextProvider';

import './configs/i18nConfig';

export default function App() {
  return (
    <StatusContextProvider>
      <AuthContextProvider>
        <ParkingContextProvider>
          <ScanScreenContextProvider>
            <Routes />
          </ScanScreenContextProvider>
        </ParkingContextProvider>
      </AuthContextProvider>
    </StatusContextProvider>
  );
}
