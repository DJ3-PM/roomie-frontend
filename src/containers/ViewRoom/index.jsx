/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Carousel from '../../components/Carousel';
import Host from '../../components/Host';
import Loader from '../../components/Loader';
import { Wrapper, Name, DescriptionRoom, DescriptionRoomText } from './styles';

const usePlaceFetch = (placeId) => {
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

const ViewRoom = ({ match }) => {

  const { placeId } = match.params;
  const { place, images, loading } = usePlaceFetch(placeId);
  const { name, description } = place;

  const renderHomeView = () => {
    return (
      <>
        {
          loading ? <Loader /> : (
            <Wrapper>
              <Host {...place} />
              <DescriptionRoom>
                <Name>{name}</Name>
                <Carousel images={images} />
                <h3>Descripción</h3>
                <DescriptionRoomText>{description}</DescriptionRoomText>
              </DescriptionRoom>
            </Wrapper>
          )
        }
      </>
    );
  };

  return (
    <Layout title={place.name} description={place.description}>
      {renderHomeView()}
    </Layout>
  );
};

export default ViewRoom;
