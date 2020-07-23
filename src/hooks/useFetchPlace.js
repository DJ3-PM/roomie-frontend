import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchPlace = ({ placeId }) => {
  const [place, setPlace] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // TODO:

  // No es buena práctica tener la url del backend directamente en los components/containers ya que si en
  // algún momento llega a cambiar debe ir método por método cambiando la URL.

  useEffect(() => {
    const fetchPlace = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`https://peaceful-bastion-02967.herokuapp.com/api/places/${placeId}`);
        const place = data.data;
        const { images } = place;
        setPlace(place);
        setImages(images);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchPlace();
  }, []);

  return { place, images, loading };
};

export default useFetchPlace;
