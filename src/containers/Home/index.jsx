import React from 'react';
import Layout from '../../components/Layout';
import Search from '../../components/search';
import Categories from '../../components/Categories';
import Place from '../../components/Place';
import PlaceItem from '../../components/PlaceItem';

const Home = () => {
  return (
    <Layout>
      <Search />
      <Categories title='Encuentra el lugar perfecto'>
        <Place>
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
          <PlaceItem />
        </Place>
      </Categories>
    </Layout>
  );
};

export default Home;
