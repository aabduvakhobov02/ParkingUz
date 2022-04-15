import backendHttpRequest from './backendHttpRequest';
import {config} from '../configs/repositoryConfig';
import {replaceAllStringByKeys} from '../utilities/stringUtils';

const getVehicles = async parkingId => {
  const resourceObject = {
    ...config.backendApiSettings.resources.getVehicles,
  };

  resourceObject.endpoint = replaceAllStringByKeys(
    resourceObject.endpoint,
    [':parkingZoneId'],
    [parkingId],
  );

  const apiVehicles = await backendHttpRequest({resourceObject});

  return apiVehicles;
};

const createVehicle = async (parkingId, body) => {
  const resourceObject = {
    ...config.backendApiSettings.resources.createVehicle,
  };

  resourceObject.endpoint = replaceAllStringByKeys(
    resourceObject.endpoint,
    [':parkingZoneId'],
    [parkingId],
  );

  const newVehicle = await backendHttpRequest({
    resourceObject,
    body,
  });

  return newVehicle;
};

const getVehicleByNumber = async (parkingId, carNumber) => {
  const resourceObject = {
    ...config.backendApiSettings.resources.getVehicleByNumber,
  };

  resourceObject.endpoint = replaceAllStringByKeys(
    resourceObject.endpoint,
    [':parkingZoneId', ':carNumber'],
    [parkingId, carNumber],
  );

  const apiVehicle = await backendHttpRequest({resourceObject});

  return apiVehicle;
};

const removeVehicle = async (parkingId, carNumber) => {
  const resourceObject = {
    ...config.backendApiSettings.resources.removeVehicle,
  };

  resourceObject.endpoint = replaceAllStringByKeys(
    resourceObject.endpoint,
    [':parkingZoneId', ':carNumber'],
    [parkingId, carNumber],
  );

  return await backendHttpRequest({resourceObject});
};

export {getVehicles, createVehicle, getVehicleByNumber, removeVehicle};
