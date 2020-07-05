/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Layout from '../../components/Layout';
import Carousel from '../../components/Carousel';
import Host from '../../components/Host';

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

  const renderHomeView = () => {
    return (
      <>
        {
          loading ? <h2>Loading</h2> : (
            <>
              <Carousel images={images} />
              <Host {...place} />
            </>
          )
        }
      </>
    );
  };

  return (
    <Layout>
      {renderHomeView()}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    place: state.place,
  };
};
export default connect(mapStateToProps, null)(ViewRoom);
