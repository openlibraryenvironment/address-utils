import getExistingLineField from './getExistingLineField';

const deleteFieldIfExists = (incomingLines, field) => {
  const id = getExistingLineField(incomingLines, field)?.id;
  return({id, _delete: true})
}

export default deleteFieldIfExists;