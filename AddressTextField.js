import React from 'react';
import { Field } from 'react-final-form'

class AddressTextField extends React.Component {
  render() {
    const { validator } = this.props;
    return (
      <Field
        {...this.props}
        parse={v => v}
        validate={validator}
      />
    ); 
  }
}

export default AddressTextField;
