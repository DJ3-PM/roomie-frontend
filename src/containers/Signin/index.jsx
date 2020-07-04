import React from 'react';

import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Form from '../../components/Form';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';

const Signin = () => {
  return (
    <Layout>
      <Wrapper>
        <Form action='' title='Sign in'>
          <Input type='email' placeholder='Email' required />
          <Input type='password' placeholder='Password' required />
          <FormButton text='Sign in!' />
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default Signin;
