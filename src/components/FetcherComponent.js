import React from 'react';
import {useAutomaticFetcher} from '../hooks/useAutomaticFetcher';
import {FETCH_STATE} from '../utilities/constants';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

const Fetcher = ({action, children, onLoad, refreshInterval}) => {
  const [fetchState, error, loadData] = useAutomaticFetcher({
    action,
    onLoad,
    refreshInterval,
  });

  if (fetchState === FETCH_STATE.LOADING) {
    //use Splash screen to show
    return <Text>Loading</Text>;
  }

  if (fetchState === FETCH_STATE.ERROR) {
    return (
      <Text> ERROR PAGE: [{error?.message ?? 'Something went wrong'}] </Text>
    );
  }

  if (fetchState === FETCH_STATE.COMPLETE) {
    if (typeof children == 'function') {
      return <>{children(loadData)}</>;
    }

    return children;
  }

  return null;
};

export default Fetcher;
