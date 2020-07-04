import React from 'react';
import Layout from '../../components/Layout';
import Gallery from '../../components/Gallery';
import PlaceForm from '../../components/PlaceForm';

const CreatePlace = () => {
  return (
    <Layout>
      <Gallery />
      <PlaceForm />
    </Layout>
  );
};

export default CreatePlace;
