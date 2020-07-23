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


  // TODO:

  // Se debería tener un custom hook para las peticiones así si algún otro
  // componente quiere usar este método no se escribe la función de nuevo

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);

      try {
        // TODO:

        // No es buena práctica tener la url del backend directamente en los components/containers ya que si en
        // algún momento llega a cambiar debe ir método por método cambiando la URL.

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
                  favorites.map((favorite) => <PlaceItem key={favorite._id} {...favorite} isFavorite setFavorites={setFavorites} />)
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
