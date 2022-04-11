import {useState} from 'react';

import {BE_ERROR_MESSAGES} from '../utilities/constants';
import {useStatusContext} from './useStatusContext';

export const useBeManualFetcher = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const {onSuccessStatus, onErrorStatus} = useStatusContext();

  const onFetch = ({
    action,
    onLoad,
    actionWhenError = () => {},
    successMessage = false,
  }) => {
    setIsLoading(true);
    action()
      .then(data => {
        onLoad(data);
        successMessage && onSuccessStatus(successMessage);
      })
      .catch(err => {
        const errorMessage = err?.beErrorCode
          ? BE_ERROR_MESSAGES[err.beErrorCode]
          : 'Something went wrong';

        onErrorStatus(errorMessage);

        actionWhenError();
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  };

  return [onFetch, isLoading, hasError];
};
