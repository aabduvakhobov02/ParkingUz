import {config} from '../configs/repositoryConfig';
import backendHttpRequest from './backendHttpRequest';

export const authSignUp = async ({
  firstName,
  lastName,
  email,
  password,
  role,
}) => {
  const body = {firstName, lastName, email, password, role};

  return await backendHttpRequest({
    resourceObject: config.backendApiSettings.resources.authSignUp,
    body,
  });
};

export const authSetRole = async ({userId, role}) => {
  const body = {userId, role};

  return await backendHttpRequest({
    resourceObject: config.backendApiSettings.resources.authSetRole,
    body,
  });
};
