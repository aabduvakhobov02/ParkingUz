import {config} from '../configs/repositoryConfig';
import backendHttpRequest from './backendHttpRequest';

export const authSignUp = async ({firstName, lastName, email, password}) => {
  const body = {firstName, lastName, email, password};

  return await backendHttpRequest({
    resourceObject: config.backendApiSettings.resources.authSignUp,
    body,
  });
};
