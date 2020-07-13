import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    const filteredPlaces = places.filter((place) => slugify(place.location).includes(slugify(target.value.trim())));
    setFilteredPlaces(filteredPlaces);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Layout title='Home' description='Find your perfect Roomeate'>
      <Hero>
        <Search onChange={handleSearch} />
      </Hero>
      <Wrapper>
        <Categories title='Find your perfect place'>
          {
            loading ? <Loader /> : (
              <Place>
                {
                // eslint-disable-next-line react/jsx-props-no-spreading
                  filteredPlaces.map((place) => <PlaceItem key={place._id} {...place} modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal} />)
                }
              </Place>
            )
          }
        </Categories>

      </Wrapper>
    </Layout>
  );
};

export default Home;
