/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import ProfileInfo from '../ProfileInfo';
import PlaceInfo from '../PlaceInfo';
import { Sidebar, ContactWrapper, BtnContact } from './styles';

const InfoSidebar = ({ price, wifi, bath, cleaning, closet, tv, parking, profileId: profile }) => {
  const customMessage = 'Hola%20estoy%20interesado%20en%20el%20departamento';

  return (
    <Sidebar>
      <ProfileInfo {...profile} price={price} />
      <PlaceInfo wifi={wifi} bath={bath} cleaning={cleaning} closet={closet} tv={tv} parking={parking} />

      <p>Contact:</p>
      {/* <ContactWrapper>
        <BtnContact target='_blank' href={`https://wa.me/${profile.whatsapp}/?text=${customMessage}`}>
          <HostServicesImg>
            <FaWhatsapp size='25px' />
          </HostServicesImg>
        </BtnContact>
        <BtnContact target='_blank' href={`mailto:${profile.contactEmail}`}>
          <HostServicesImg>
            <Email size='25px' />
          </HostServicesImg>
        </BtnContact>
      </ContactWrapper> */}
    </Sidebar>
  );
};

InfoSidebar.propTypes = {
  price: PropTypes.number,
  wifi: PropTypes.bool,
  bath: PropTypes.bool,
  cleaning: PropTypes.bool,
  closet: PropTypes.bool,
  tv: PropTypes.bool,
  parking: PropTypes.bool,
  profileId: PropTypes.object.isRequired,
};

export default InfoSidebar;
