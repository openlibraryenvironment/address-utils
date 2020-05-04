import React from 'react';
import { Form, Field } from 'react-final-form'

class AddressTextField extends React.Component {
  render() {
    const { component, label, name, required, validator} = this.props;
    return (
      <Field
        name={name}
        label={label}
        component={component}
        required={required}
        validate={validator}
      />
    ); 
  }
}

export default AddressTextField;
