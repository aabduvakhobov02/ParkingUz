import isEmpty from 'lodash/isEmpty';

export const isPropertiesAreValid = values => {
  const filteredValues = values.filter(value => !isEmpty(value));

  return values.length === filteredValues.length;
};
