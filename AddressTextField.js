import React from 'react';
import { Form, Field } from 'react-final-form'

class AddressTextField extends React.Component {
  render() {
    const { validator } = this.props;
    return (
      <Field
       {...this.props}
        validate={validator}
      />
    ); 
  }
}

export default AddressTextField;
