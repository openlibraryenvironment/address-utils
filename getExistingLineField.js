const getExistingLineField = (lineArray, field) => {
  lineArray?.filter((line) => {
    line.type?.value === field
  })?.getAt(0)
}

export default getExistingLineField;

