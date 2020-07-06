import React from 'react';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Gallery from '../../components/Gallery';
import PlaceForm from '../../components/PlaceForm';
import Form from '../../components/Form';
import Input from '../../components/Input';
import InputCheck from '../../components/InputCheck';
import InputFile from '../../components/InputFile';
import TextArea from '../../components/TextArea';
import FormButton from '../../components/FormButton';

const CreatePlace = () => {
  const handleOnSubmit = (evet) => {

  };

  const handleCheckInput = (event) => {

  };

  const handleTextInput = (event) => {

  };

  const handleFileInput = (event) => {

  };
  return (
    <Layout>
      <Wrapper>
        <Form title='Create a Place' onSubmit={handleOnSubmit}>
          <InputFile name='images' onChange={handleFileInput} text='Upload pictures of your room' multiple />
          <InputCheck name='wifi' text='Wi-Fi' onClick={handleCheckInput} />
          <InputCheck name='parking' text='Parking' onClick={handleCheckInput} />
          <InputCheck name='cleaning' text='Cleaning Service' onClick={handleCheckInput} />
          <InputCheck name='tv' text='TV' onClick={handleCheckInput} />
          <InputCheck name='bath' text='Private Bathroom' onClick={handleCheckInput} />
          <InputCheck name='closet' text='Closet' onClick={handleCheckInput} />
          <Input name='price' onChange={handleTextInput} type='number' />
          <Input name='size' onChange={handleTextInput} type='number' />
          <TextArea name='description' onChange={handleTextInput} text='Tell us more about your room!' />
          <Input name='profileId' onChange={handleTextInput} placeholder='PROFILE ID (TEST)' />
          <FormButton text='Done' />
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default CreatePlace;
