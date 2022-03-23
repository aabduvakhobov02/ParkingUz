import React from 'react';
import 'react-native-gesture-handler';

import ScanScreenContextProvider from './contextProviders/ScanScreenContextProvider';
import Routes from './screens/Routes';

export default function App() {
  return (
    <ScanScreenContextProvider>
      <Routes />
    </ScanScreenContextProvider>
  );
}
