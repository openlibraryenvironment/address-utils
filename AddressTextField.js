import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

class AddressTextField extends React.Component {
  static propTypes = {
    validator: PropTypes.func,
  };

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
