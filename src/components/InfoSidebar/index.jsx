/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import ProfileInfo from '../ProfileInfo';
import PlaceInfo from '../PlaceInfo';
import { Sidebar } from './styles';

const InfoSidebar = ({ price, wifi, bath, cleaning, closet, tv, parking, profileId: profile }) => {
  return (
    <Sidebar>
      <ProfileInfo {...profile} price={price} />
      <PlaceInfo price={price} wifi={wifi} bath={bath} cleaning={cleaning} closet={closet} tv={tv} parking={parking} />
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
