import backendHttpRequest from './backendHttpRequest';
import {config} from '../configs/repositoryConfig';
import {replaceAllStringByKeys} from '../utilities/stringUtils';

const getParkingLots = async () => {
  return await backendHttpRequest({
    resourceObject: config.backendApiSettings.resources.getParkingLots,
  });
};

const createParkingLot = async body => {
  const resourceObject = {
    ...config.backendApiSettings.resources.createParkingLot,
  };

  const newParkingLot = await backendHttpRequest({
    resourceObject,
    body,
  });

  return newParkingLot;
};

const getParkingLotById = async id => {
  const resourceObject = {
    ...config.backendApiSettings.resources.getParkingLotById,
  };
  resourceObject.endpoint = replaceAllStringByKeys(
    resourceObject.endpoint,
    [':id'],
    [id],
  );

  const apiParkingLot = await backendHttpRequest({resourceObject});

  return apiParkingLot;
};

export {getParkingLots, createParkingLot, getParkingLotById};
