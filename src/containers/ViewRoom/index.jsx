/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Layout from '../../components/Layout';
import Carousel from '../../components/Carousel';
import InfoSidebar from '../../components/InfoSidebar';
import Loader from '../../components/Loader';
import useFetchPlace from '../../hooks/useFetchPlace';
import { Wrapper, Name, DescriptionRoom, DescriptionRoomText } from './styles';

const ViewRoom = ({ match }) => {

  const { placeId } = match.params;
  const { place, images, loading } = useFetchPlace({ placeId });
  const { name, description } = place;

  const renderHomeView = () => {
    return (
      <>
        {
          loading ? <Loader /> : (
            <Wrapper>
              <InfoSidebar {...place} />
              <DescriptionRoom>
                <Name>{name}</Name>
                <Carousel images={images} />
                <h3>Place description</h3>
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
