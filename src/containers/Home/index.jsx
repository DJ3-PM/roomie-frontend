import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Search from '../../components/Search';
import Categories from '../../components/Categories';
import Place from '../../components/Place';
import PlaceItem from '../../components/PlaceItem';
import Loader from '../../components/Loader';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get('https://peaceful-bastion-02967.herokuapp.com/api/places');
        const places = data.data;
        console.log('fetchPlaces -> places', places);
        setPlaces(places);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <Layout>
      <Search />
      <Wrapper>
        <Categories title='Encuentra el lugar perfecto'>
          {
            loading ? <Loader /> : (
              <Place>
                {
                // eslint-disable-next-line react/jsx-props-no-spreading
                  places.map((place) => <PlaceItem key={place._id} {...place} />)
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
