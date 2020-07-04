import React from 'react';

import { Form, FormConstrainer, Title } from './styles';

const FormComponent = ({ action, title, children }) => {
  return (
    <Form action={action} method='post'>
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
