import React from 'react';

import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Form from '../../components/Form';
import Input from '../../components/Input';

import { ButtonContainer, Button } from './styles';

const Signup = () => {
  return (
    <Layout>
      <Wrapper>
        <Form action='' title='Create an account'>
          <Input type='email' name='' id='' placeholder='Email' required />
          <Input type='password' name='' id='' placeholder='Password' required />
          <ButtonContainer>
            <Button type='submit'>Signup</Button>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default Signup;
