import React from 'react';
import Container, {Toast} from 'toastify-react-native';
import {useTranslation} from 'react-i18next';

import {StatusContext} from '../contexts/statusContext';

const DEFAULT_DURATION_MILLIS = 5000;

const StatusContextProvider = ({children}) => {
  const {t} = useTranslation();

  const onSuccessStatus = title => Toast.success(t(title));

  const onInfoStatus = title => Toast.info(t(title));

  const onWarningStatus = title => Toast.warning(t(title));

  const onErrorStatus = title => Toast.error(t(title));

  return (
    <StatusContext.Provider
      value={{
        onSuccessStatus,
        onInfoStatus,
        onWarningStatus,
        onErrorStatus,
      }}>
      <Container
        position="top"
        duration={DEFAULT_DURATION_MILLIS}
        animationStyle="fancy"
      />
      {children}
    </StatusContext.Provider>
  );
};

export default StatusContextProvider;
