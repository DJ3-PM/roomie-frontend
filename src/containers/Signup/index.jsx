import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../Context';

import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Form from '../../components/Form';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';

const Signup = () => {
  const { activateUserId } = useContext(Context);
  const [form, setForm] = useState({});

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = form;

    try {
      const { data } = await axios.post('https://peaceful-bastion-02967.herokuapp.com/api/auth/sign-up', {
        username,
        password,
      });

      const userId = data.data;
      console.log(data);
      window.location.href = '/create/profile';
      activateUserId(userId);
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
    <Layout title='Sign up!' description='Sign up'>
      <Wrapper>
        <Form onSubmit={handleOnSubmit} title='Create an account'>
          <Input name='username' onChange={handleTextInput} type='email' placeholder='Email' required />
          <Input name='password' onChange={handleTextInput} type='password' placeholder='Password' required />
          <FormButton text='Signup!' />
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default Signup;
