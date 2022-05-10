import {
  logInWithEmailAndPassword,
  customTokenSignIn,
  logOut,
  getFirebaseIdToken,
  getParsedIdToken,
  onTokenChanged,
  auth,
} from '../repositories/firebaseRepository';

import {authSignUp, authSetRole} from '../repositories/authRepository';

export const signUp = async ({email, password, firstName, lastName, role}) => {
  const {token} = await authSignUp({
    firstName,
    lastName,
    email,
    password,
    role,
  });

  const userCreds = await customTokenSignIn(token);

  return userCreds;
};

export const setRole = async ({userId, role}) =>
  await authSetRole({userId, role});

export const signInWithEmailAndPassword = async ({email, password}) => {
  await logInWithEmailAndPassword({email, password});
};

export const signOut = async () => await logOut();

export const getAccessToken = async () => await getFirebaseIdToken();

export const onIdTokenChanged = callback => onTokenChanged(callback);

export const getUserRoles = async () => {
  const parsedToken = await getParsedIdToken();
  return parsedToken.claims.role;
};

export const firebaseAuth = auth;
