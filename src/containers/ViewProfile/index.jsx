import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import InfoSidebar from '../../components/InfoSidebar';
import ProfileInfo from '../../components/ProfileInfo';
import Place from '../../components/Place';
import PlaceItem from '../../components/PlaceItem';

import { Container, Constrainer } from './styles';

const useFetchProfile = ({ profileId }) => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        // TODO:

        // No es buena práctica tener la url del backend directamente en los components/containers ya que si en
        // algún momento llega a cambiar debe ir método por método cambiando la URL.
        const { data } = await axios.get(`https://peaceful-bastion-02967.herokuapp.com/api/profile/${profileId}`);
        setProfile(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfileData();
  }, []);

  return { profile, loading };
};

const ViewProfile = ({ match }) => {
  const { profileId } = match.params;
  const { profile, loading } = useFetchProfile({ profileId });
  const { places } = profile;

  return (
    <Layout title={`${profile.firstname} ${profile.lastname}`}>
      {
        loading ? <Loader /> : (
          <Container>
            <InfoSidebar>
              <ProfileInfo {...profile} />
            </InfoSidebar>
            <Constrainer>
              <Place>
                {
                  places.map((place) => <PlaceItem key={place._id} {...place} />)
                }
              </Place>
            </Constrainer>
          </Container>
        )
      }
    </Layout>
  );
};

export default ViewProfile;
