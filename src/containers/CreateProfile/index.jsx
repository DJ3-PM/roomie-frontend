import React from 'react';

import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Form from '../../components/Form';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';

const CreateProfile = () => {
  return (
    <Layout>
      <Wrapper>
        <Form title='Create your profile'>
          {/* TODO: Add file upload option */}
          <Input type='text' placeholder='Firstname' />
          <Input type='text' placeholder='Lastname' />
          <label htmlFor='isHost'>
            Do you want to be a host?
            <input type='checkbox' name='isHost' id='' />
          </label>
          <Input type='email' placeholder='Email' />
          <Input type='number' placeholder='Phone' />
          {/* TODO: Improve TextArea */}
          <label htmlFor='about'>Tell us about you</label>
          <textarea name='about' id='' cols='30' rows='10' />
          <FormButton text='Done' />
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default CreateProfile;
