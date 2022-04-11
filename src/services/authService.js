import {
  logInWithEmailAndPassword,
  customTokenSignIn,
  logOut,
  getFirebaseIdToken,
  onTokenChanged,
  auth,
} from '../repositories/firebaseRepository';

import {authSignUp} from '../repositories/authRepository';

export const signUp = async ({email, password, firstName, lastName}) => {
  const {token} = await authSignUp({
    firstName,
    lastName,
    email,
    password,
  });

  const userCreds = await customTokenSignIn(token);

  return userCreds;
};

export const signInWithEmailAndPassword = async ({email, password}) => {
  await logInWithEmailAndPassword({email, password});
};

export const signOut = async () => await logOut();

export const getAccessToken = async () => await getFirebaseIdToken();

export const onIdTokenChanged = callback => onTokenChanged(callback);

export const getUserRoles = async () => {
  const parsedToken = await getParsedIdToken();
  console.log(parsedToken);
};

export const firebaseAuth = auth;
