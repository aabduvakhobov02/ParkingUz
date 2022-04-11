import {useContext} from 'react';
import {ParkingContext} from '../contexts/parkingContext';

const useParkingContext = () => useContext(ParkingContext);

export {useParkingContext};
