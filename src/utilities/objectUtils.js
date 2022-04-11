const convertValuesToArray = (obj = {}) => {
  return Object.values(obj);
};

const convertObjectToArray = (obj = {}) => {
  return Object.entries(obj);
};

export { convertValuesToArray, convertObjectToArray };
