/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Layout from '../../components/Layout';
import Carousel from '../../components/Carousel';
import InfoSidebar from '../../components/InfoSidebar';
import Loader from '../../components/Loader';
import useFetchPlace from '../../hooks/useFetchPlace';
import ProfileInfo from '../../components/ProfileInfo';
import PlaceInfo from '../../components/PlaceInfo';
import { Wrapper, Name, DescriptionRoom, DescriptionRoomText } from './styles';

const ViewRoom = ({ match }) => {

  const { placeId } = match.params;
  const { place, images, loading } = useFetchPlace({ placeId });
  const { name, description, profileId: profile } = place;

  // TODO:

  // Es mala práctica tener un componente dentro de otro, en este caso se podría
  // acoplar a un solo component o si son dos deben tener diferentes archivos.
  const renderHomeView = () => {
    return (
      <>
        {
          loading ? <Loader /> : (
            <Wrapper>
              <InfoSidebar>
                <ProfileInfo {...profile} />
                <PlaceInfo {...place} />
              </InfoSidebar>
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
