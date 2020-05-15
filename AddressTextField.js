import React from 'react';
import { Field } from 'react-final-form'

class AddressTextField extends React.Component {
  render() {
    const { validator, ...restOfProps } = this.props;
    return (
      <Field
        {...restOfProps}
        parse={v => v}
        validate={validator}
      />
    ); 
  }
}

export default AddressTextField;
