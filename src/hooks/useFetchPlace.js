import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchPlace = ({ placeId }) => {
  const [place, setPlace] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

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
        console.log(place);
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
