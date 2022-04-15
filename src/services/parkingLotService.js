import {
  getParkingLots,
  createParkingLot,
  getParkingLotById,
} from '../repositories/parkingLotRepository';

const getAllParkingLots = async () => await getParkingLots();

const getParkingById = async id => await getParkingLotById(id);

const createParking = async body => await createParkingLot(body);

export {getAllParkingLots, getParkingById, createParking};
