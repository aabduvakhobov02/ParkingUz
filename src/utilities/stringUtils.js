export const replaceAllStringByKeys = (
  originalString,
  listOfStringKeys,
  listOfStringValues
) => {
  let finalString = originalString;
  listOfStringKeys.map((key, index) => {
    return (finalString = finalString.replace(key, listOfStringValues[index]));
  });
  return finalString;
};

export const convertFirstLetterToUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
