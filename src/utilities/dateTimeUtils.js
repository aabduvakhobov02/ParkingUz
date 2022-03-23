import moment from 'moment';
import {TIME_FORMATS} from './constants';

export const unixTimeConvertor = (
  unixTime,
  timeFormat = TIME_FORMATS.TIME_REGISTERED,
) => {
  return moment.unix(unixTime).format(timeFormat);
};
