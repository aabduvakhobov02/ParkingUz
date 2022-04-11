import backendHttpRequest from './backendHttpRequest';
import {config} from '../configs/repositoryConfig';

export const getUsers = async () => {
  return await backendHttpRequest({
    resourceObject: config.backendApiSettings.resources.getUsers,
  });
};
