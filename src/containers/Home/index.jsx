import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Hero from '../../components/Hero';
import Search from '../../components/Search';
import Categories from '../../components/Categories';
import Place from '../../components/Place';
import PlaceItem from '../../components/PlaceItem';
import Loader from '../../components/Loader';

import slugify from '../../utils/slugify';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get('https://peaceful-bastion-02967.herokuapp.com/api/places');
        const places = data.data;
        setPlaces(places);
        setFilteredPlaces(places);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlaces();
  }, []);

  const handleSearch = (event) => {
    const { target } = event;
    console.log(slugify(target.value));
    const filteredPlaces = places.filter((place) => slugify(place.location).includes(slugify(target.value.trim())));
    setFilteredPlaces(filteredPlaces);
  };

  return (
    <Layout>
      <Hero>
        <Search onChange={handleSearch} />
      </Hero>
      <Wrapper>
        <Categories title='Encuentra el lugar perfecto'>
          {
            loading ? <Loader /> : (
              <Place>
                {
                // eslint-disable-next-line react/jsx-props-no-spreading
                  filteredPlaces.map((place) => <PlaceItem key={place._id} {...place} />)
                }
              </Place>
            )
          }
        </Categories>

      </Wrapper>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    places: state.places,
  };
};

export default connect(mapStateToProps, null)(Home);
