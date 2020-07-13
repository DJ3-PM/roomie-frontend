import React, { useState, useContext } from 'react';
import { Link } from './styles';
import axios from 'axios';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { Context } from '../../Context';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Form from '../../components/Form';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';
import Description from '../../components/Description';

const Signin = () => {
  const [form, setForm] = useState({});

  const {
    activateIsHost,
    activateAvatar,
    activateUserId,
    activateProfileId,
    activateFirstname,
    activateLastname,
    errorMessage,
  } = useContext(Context);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = form;
    console.log('password', password);
    console.log('username', username);

    try {
      const { data } = await axios({
        url: 'https://peaceful-bastion-02967.herokuapp.com/api/auth/sign-in',
        method: 'post',
        auth: {
          username,
          password,
        },
      });
      const { profile, userId } = data.data;
      console.log(data.data);

      activateIsHost(profile.isHost);
      activateAvatar(profile.avatar);
      activateProfileId(profile._id);
      activateFirstname(profile.firstname);
      activateLastname(profile.lastname);
      activateUserId(userId);
      alert('Sign in succesfully!');

    } catch (error) {
      if (error.message === 'Request failed with status code 401') {
        errorMessage('Invalid credentials');
      } else {
        errorMessage();
      };
    }

  };

  const handleTextInput = (event) => {
    const { target } = event;

    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return (
    <Layout title='Sign in' description='Sign in'>
      <Wrapper>
        <Form onSubmit={handleOnSubmit} title='Welcome Back!'>
          <Description text='Please login to your account.' />
          <p>
            <AiOutlineUser />
            User
          </p>
          <Input name='username' onChange={handleTextInput} type='email' placeholder='Email' required />
          <p>
            <FiLock />
            Password
          </p>
          <Input name='password' onChange={handleTextInput} type='password' placeholder='Password' required />
          <p>
            Not an user yet?
            <Link to='/signup'> Sign up</Link>
          </p>
          <FormButton text='Sign in!' />
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default Signin;
