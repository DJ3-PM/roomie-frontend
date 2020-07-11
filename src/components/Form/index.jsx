import React from 'react';

import { Form, FormConstrainer, Title} from './styles';

const FormComponent = ({ title, onSubmit, children, description }) => {
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

export default FormComponent;
