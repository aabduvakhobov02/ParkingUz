import {
  getVehicles,
  createVehicle,
  getVehicleByNumber,
  removeVehicle,
} from '../repositories/vehicleRepository';

const getCars = async parkingId => await getVehicles(parkingId);

const getCarByNumber = async (parkingId, carNumber) =>
  await getVehicleByNumber(parkingId, carNumber);

const createCar = async (parkingId, body) =>
  await createVehicle(parkingId, body);

const removeCar = async (parkingId, carNumber) =>
  await removeVehicle(parkingId, carNumber);

export {getCars, getCarByNumber, createCar, removeCar};
