import React from 'react';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Gallery from '../../components/Gallery';
import PlaceForm from '../../components/PlaceForm';

const CreatePlace = () => {
  return (
    <Layout>
      <Wrapper>
        <Gallery />
        <PlaceForm />
      </Wrapper>
    </Layout>
  );
};

export default CreatePlace;
