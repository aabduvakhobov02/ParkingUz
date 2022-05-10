import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  getIdToken,
  signOut,
  deleteUser,
  signInWithCustomToken,
  onIdTokenChanged,
  getIdTokenResult,
} from 'firebase/auth';

import {getFirebaseProjectSettings} from '../configs/repositoryConfig';

const firebaseAppConfig = getFirebaseProjectSettings();

const app = initializeApp(firebaseAppConfig);
const auth = getAuth(app);

const logInWithEmailAndPassword = async ({email, password}) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {}
};

const logOut = async () => await signOut(auth);

const removeUser = async user => await deleteUser(user);

const getFirebaseIdToken = async () =>
  await getIdToken(auth.currentUser, false);

const customTokenSignIn = async idToken =>
  await signInWithCustomToken(auth, idToken);

const onTokenChanged = callback => onIdTokenChanged(auth, callback);

const getParsedIdToken = async () => await getIdTokenResult(auth.currentUser);

export {
  logInWithEmailAndPassword,
  logOut,
  removeUser,
  getFirebaseIdToken,
  customTokenSignIn,
  onTokenChanged,
  getParsedIdToken,
  auth,
};
