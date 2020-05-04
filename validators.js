import React from 'react';
import { FormattedMessage } from 'react-intl';

const required = value => {
  const blankString = /^\s+$/;
  if ((value && !blankString.test(value)) || value === false || value === 0) {
    return undefined;
  }
  return "NEEDS TRANSLATING -- This field can't be empty";
};

export { required };