import {useState, useEffect} from 'react';
import {FETCH_STATE} from '../utilities/constants';

export const useAutomaticFetcher = ({action, onLoad, refreshInterval}) => {
  const [fetchState, setFetchState] = useState(FETCH_STATE.IDLE);
  const [error, setError] = useState();

  const loadData = async () => {
    try {
      setError();
      setFetchState(FETCH_STATE.LOADING);

      const data = await action();
      onLoad(data);

      setFetchState(FETCH_STATE.COMPLETE);
    } catch (err) {
      setError(err);
      setFetchState(FETCH_STATE.ERROR);
    }
  };

  useEffect(() => {
    if (action) {
      loadData();
    } else {
      setFetchState(FETCH_STATE.IDLE);
    }

    if (refreshInterval) {
      const interval = setInterval(() => loadData(), refreshInterval);

      return () => {
        clearInterval(interval);
      };
    }
  }, [action, onLoad, refreshInterval]);

  return [fetchState, error, loadData];
};
