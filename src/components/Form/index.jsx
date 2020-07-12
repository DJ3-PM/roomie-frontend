import React from 'react';
import PropTypes from 'prop-types';

import { Form, FormConstrainer, Title } from './styles';

const FormComponent = ({ title, onSubmit, children }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Title>{title}</Title>
      <FormConstrainer>
        {
          children
        }
      </FormConstrainer>
    </Form>
  );
};

FormComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
