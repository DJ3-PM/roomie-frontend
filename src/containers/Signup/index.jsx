import React from 'react';

import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';

import { Form, FormConstrainer, Title, Input, ButtonContainer, Button } from './styles';

const Signup = () => {
  return (
    <Layout>
      <Wrapper>
        <Form action='' method='post'>
          <Title>Create an account</Title>
          <FormConstrainer>
            <Input type='email' name='' id='' placeholder='Email' required />
            <Input type='password' name='' id='' placeholder='Password' required />
            <ButtonContainer>
              <Button type='submit'>Signup</Button>
            </ButtonContainer>
          </FormConstrainer>
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default Signup;
