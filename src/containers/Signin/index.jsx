import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import { Link } from './styles';
import { Context } from '../../Context';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Form from '../../components/Form';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';
import Description from '../../components/Description';
import TitleInput from '../../components/TitleInput';

const Signin = () => {
  const [form, setForm] = useState({});

  const {
    activateIsHost,
    activateAvatar,
    activateUserId,
    activateProfileId,
    activateFirstname,
    activateLastname,
  } = useContext(Context);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = form;

    try {
      // TODO:

      // No es buena práctica tener la url del backend directamente en los components/containers ya que si en
      // algún momento llega a cambiar debe ir método por método cambiando la URL.
      const { data } = await axios({
        url: 'https://peaceful-bastion-02967.herokuapp.com/api/auth/sign-in',
        method: 'post',
        auth: {
          username,
          password,
        },
      });
      const { profile, userId } = data.data;

      activateIsHost(profile.isHost);
      activateAvatar(profile.avatar);
      activateProfileId(profile._id);
      activateFirstname(profile.firstname);
      activateLastname(profile.lastname);
      activateUserId(userId);

    } catch (error) {
      if (error.message === 'Request failed with status code 401') {
        alert('Invalid credentials');
      } else {
        alert(error);
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
          <TitleInput text='User'>
            <AiOutlineUser />
          </TitleInput>
          <Input name='username' onChange={handleTextInput} type='email' placeholder='Email' required />
          <TitleInput text='Password'>
            <FiLock />
          </TitleInput>
          <Input name='password' onChange={handleTextInput} type='password' placeholder='Password' required />
          <p>
            First time here?
            <Link to='/signup'> Sign up for an account</Link>
          </p>
          <FormButton text='Sign in!' />
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default Signin;
