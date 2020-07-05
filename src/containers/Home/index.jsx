import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import Search from '../../components/Search';
import Categories from '../../components/Categories';
import Place from '../../components/Place';
import PlaceItem from '../../components/PlaceItem';

const Home = ({ places }) => {
  return (
    <Layout>
      <Search />
      <Categories title='Encuentra el lugar perfecto'>
        <Place>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            places.map((place) => <PlaceItem key={place._id} {...place} />)
          }
        </Place>
      </Categories>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    places: state.places,
  };
};

export default connect(mapStateToProps, null)(Home);
