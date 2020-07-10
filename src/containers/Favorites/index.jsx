import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Categories from '../../components/Categories';
import Place from '../../components/Place';
import PlaceItem from '../../components/PlaceItem';
import Loader from '../../components/Loader';


const Favorites = () => {
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

 

  return (
    <Layout>
    
      <Wrapper>
        <Categories title='Favorites'>
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

export default Favorites;
