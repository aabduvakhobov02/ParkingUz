const baseConfig = require('./repositoryConfig.json');

export const config = {...baseConfig};

export const getFirebaseProjectSettings = () => {
  // TODO: change this to get dev, stg and prod project ids if there is one
  return baseConfig.firebaseSettings['ocr-login'];
};
