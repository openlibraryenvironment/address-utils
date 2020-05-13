import getExistingLineField from './getExistingLineField';

const deleteFieldIfExists = (incomingLines, field) => {
  const id = getExistingLineField(incomingLines, field)?.id;
  return (id ? {id, _delete: true} : null);
}

export default deleteFieldIfExists;