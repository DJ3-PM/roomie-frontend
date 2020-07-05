import React, { useState } from 'react';
import axios from 'axios';

import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Form from '../../components/Form';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';

import userDefault from '../../assets/static/userDefault.svg';

import { Avatar } from './styles';

const CreateProfile = () => {
  const [profileImage, setProfileImage] = useState(userDefault);

  const [form, setForm] = useState({
    isHost: false,
  });

  const handleTextInput = (event) => {
    const { target } = event;
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleFileInput = (event) => {
    const { target } = event;

    setForm({
      ...form,
      [target.name]: target.files[0],
    });

    const image = URL.createObjectURL(target.files[0]);
    setProfileImage(image);
  };

  const handleCheckInput = (event) => {
    const { target } = event;
    setForm({
      ...form,
      [target.name]: target.checked,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    const myDataForm = new FormData();
    Object.keys(form).forEach((entry) => {
      myDataForm.append(`${entry}`, form[entry]);
    });

    const sendDataForm = async () => {
      try {
        const { data, status } = await axios.post('https://peaceful-bastion-02967.herokuapp.com/api/profile', myDataForm, {});
        alert(data.message);
      } catch (error) {
        console.log(error);
      }

    };

    sendDataForm();

  };

  console.log(form);
  return (
    <Layout>
      <Wrapper>
        <Form title='Create your profile' onSubmit={handleOnSubmit}>
          {/* TODO: Add file upload option */}
          <Avatar src={profileImage} />
          <input name='avatar' type='file' id='' accept='image/png, image/jpg, image/jpeg' onChange={handleFileInput} />
          <Input name='firstname' onChange={handleTextInput} type='text' placeholder='Firstname' />
          <Input name='lastname' onChange={handleTextInput} type='text' placeholder='Lastname' />
          <label htmlFor='isHost'>
            Do you want to be a host?
            <input name='isHost' type='checkbox' onClick={handleCheckInput} />
          </label>
          <Input name='contactEmail' onChange={handleTextInput} type='email' placeholder='Email' />
          <Input name='whatsapp' onChange={handleTextInput} type='number' placeholder='Phone' />
          {/* TODO: Improve TextArea */}
          <label htmlFor='about'>Tell us about you</label>
          <textarea name='about' onChange={handleTextInput} id='' cols='30' rows='10' />
          <Input name='userId' onChange={handleTextInput} type='text' placeholder='USER ID (TEST)' />
          <FormButton text='Done' />
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default CreateProfile;
