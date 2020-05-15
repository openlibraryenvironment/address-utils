const getExistingLineField = (lineArray, field) => {
  const filteredArray = lineArray?.filter((line) => {
    return line.type?.value === field;
  });
  return filteredArray?.[0];
};

export default getExistingLineField;
