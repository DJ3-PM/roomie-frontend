import React, { useState } from 'react';
import axios from 'axios';

import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Form from '../../components/Form';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';

import userDefault from '../../assets/static/userDefault.svg';

import { Avatar, InputFile, Label, TextArea } from './styles';

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

    // Ensure this data is not sent when user doesn't want to be host
    if (form.isHost === false) {
      myDataForm.delete('whatsapp');
      myDataForm.delete('contactEmail');
      myDataForm.delete('about');
    }

    const sendDataForm = async () => {
      try {
        const { data, status } = await axios.post('https://peaceful-bastion-02967.herokuapp.com/api/profile', myDataForm, {});
        alert(data.message);
      } catch (error) {
        const { message } = error.response.data;
        alert(message);
      }

    };

    sendDataForm();

  };

  console.log(form);
  return (
    <Layout>
      <Wrapper>
        <Form title='Create your profile' onSubmit={handleOnSubmit}>
          <Avatar src={profileImage} />
          <Label htmlFor='avatar'>Upload your avatar</Label>
          <InputFile name='avatar' type='file' id='' accept='image/png, image/jpg, image/jpeg' onChange={handleFileInput} />
          <Label htmlFor='firstname'>What&apos;s your name?</Label>
          <Input name='firstname' onChange={handleTextInput} type='text' placeholder='Firstname' />
          <Label htmlFor='lastname'>What&apos;s your lastname?</Label>
          <Input name='lastname' onChange={handleTextInput} type='text' placeholder='Lastname' />
          <Label htmlFor='isHost'>
            Do you want to be a host?
            <input name='isHost' type='checkbox' onClick={handleCheckInput} />
          </Label>
          {
            form.isHost && (
              <>
                <Label htmlFor='contactEmail'>An email where guests can contact you</Label>
                <Input name='contactEmail' onChange={handleTextInput} type='email' placeholder='Email' />
                <Label htmlFor='whatsapp'>A WhatsApp enabled phone number for guets to contact you</Label>
                <Input name='whatsapp' onChange={handleTextInput} type='number' placeholder='Phone' />
                <Label htmlFor='about'>Tell us about you</Label>
                <TextArea name='about' onChange={handleTextInput} id='' cols='30' rows='10' />
              </>
            )
          }
          <Input name='userId' onChange={handleTextInput} type='text' placeholder='USER ID (TEST)' />
          <FormButton text='Done' />
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default CreateProfile;
