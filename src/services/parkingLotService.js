import {
  getParkingLots,
  createParkingLot,
  getParkingLotById,
} from '../repositories/parkingLotRepository';

const getAllParkingLots = async () => await getParkingLots();

const getParkingLotById = async id => await getParkingLotById(id);

const createParkingLot = async body => await createParkingLot(body);

export {getAllParkingLots, getParkingLotById, createParkingLot};
