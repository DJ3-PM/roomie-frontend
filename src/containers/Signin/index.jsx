import React, { useState } from 'react';
import axios from 'axios';

import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Form from '../../components/Form';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';

const Signin = () => {
  const [form, setForm] = useState({});

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = form;
    console.log('password', password);
    console.log('username', username);

    try {
      const { data } = await axios({
        url: 'http://localhost:8000/api/auth/sign-in',
        method: 'post',
        auth: {
          username,
          password,
        },
      });
      console.log('data', data);

    } catch (error) {
      console.log(error);
    }

  };

  const handleTextInput = (event) => {
    const { target } = event;

    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  console.log(form);
  return (
    <Layout>
      <Wrapper>
        <Form onSubmit={handleOnSubmit} title='Sign in'>
          <Input name='username' onChange={handleTextInput} type='email' placeholder='Email' required />
          <Input name='password' onChange={handleTextInput} type='password' placeholder='Password' required />
          <FormButton text='Sign in!' />
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default Signin;
