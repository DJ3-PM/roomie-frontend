/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import Carousel from '../../components/Carousel';
import Host from '../../components/Host';

const ViewRoom = ({ place }) => {
  console.log(place);
  const { images } = place;

  return (
    <Layout>
      <Carousel images={images} />
      <Host {...place} />
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    place: state.place,
  };
};
export default connect(mapStateToProps, null)(ViewRoom);
