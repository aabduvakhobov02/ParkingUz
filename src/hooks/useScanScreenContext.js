import {useContext} from 'react';
import {ScanScreenContext} from '../contexts/scanScreenContext';

const useScanScreenContext = () => useContext(ScanScreenContext);

export {useScanScreenContext};
