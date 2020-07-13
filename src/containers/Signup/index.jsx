import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineMail } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { Context } from '../../Context';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Form from '../../components/Form';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';
import Description from '../../components/Description';
import TitleInput from '../../components/TitleInput';

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
          <Description text='Create an account to access.' />
          <TitleInput text=' Email'>
            <AiOutlineMail />
          </TitleInput>
          <Input name='username' onChange={handleTextInput} type='email' placeholder='Email' required />
          <TitleInput text=' Password'>
            <FiLock />
          </TitleInput>
          <Input name='password' onChange={handleTextInput} type='password' placeholder='Password' required />
          <p>
            Not your first time here?
            <Link to='/signin'> Signin</Link>
          </p>
          <FormButton text='Signup!' />
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default Signup;
