import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../Context';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Categories from '../../components/Categories';
import Place from '../../components/Place';
import PlaceItem from '../../components/PlaceItem';
import Loader from '../../components/Loader';

const Favorites = () => {
  const [loading, setLoading] = useState(true);
  const { profileId } = useContext(Context);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get('https://peaceful-bastion-02967.herokuapp.com/api/favorites', {
          headers: {
            'profileid': profileId,
          },
        });

        const favoritesArray = data.data;
        setFavorites(favoritesArray);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchFavorites();
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
                  favorites.map((favorite) => <PlaceItem key={favorite._id} {...favorite} />)
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
