import React from 'react';
import PropTypes from 'prop-types';
import { BsWifi } from 'react-icons/bs';
import { FaBath, FaParking } from 'react-icons/fa';
import { MdScreenShare } from 'react-icons/md';
import { GiVacuumCleaner as Cleaning, GiClosedDoors as Closet } from 'react-icons/gi';

import { Info, Service, Img, Name } from './styles';

const PlaceInfo = ({ price, wifi, bath, cleaning, closet, tv, parking }) => {
  return (
    <Info>
      <p>{`${price} COP / Día`}</p>
      {
        wifi ? (
          <>
            <Service>
              <Img>
                <BsWifi size='25px' />
              </Img>
              <Name>Wi-Fi</Name>
            </Service>
          </>
        ) :
          ''
      }
      {
        bath ? (
          <>
            <Service>
              <Img>
                <FaBath size='25px' />
              </Img>
              <Name>Private Bathroom</Name>
            </Service>
          </>
        ) : ''
      }
      {
        parking ? (
          <>
            <Service>
              <Img>
                <FaParking size='25px' />
              </Img>
              <Name>Parking</Name>
            </Service>
          </>
        ) : ''
      }
      {
        tv ? (
          <>
            <Service>
              <Img>
                <MdScreenShare size='25px' />
              </Img>
              <Name>Cable TV</Name>
            </Service>
          </>
        ) : ''
      }
      {
        closet ? (
          <>
            <Service>
              <Img>
                <Closet size='25px' />
              </Img>
              <Name>Closet</Name>
            </Service>
          </>
        ) : ''
      }
      {
        cleaning ? (
          <>
            <Service>
              <Img>
                <Cleaning size='25px' />
              </Img>
              <Name>Cleaning Service</Name>
            </Service>
          </>
        ) : ''
      }
    </Info>

  );
};

PlaceInfo.propTypes = {
  price: PropTypes.number,
  wifi: PropTypes.bool,
  bath: PropTypes.bool,
  cleaning: PropTypes.bool,
  closet: PropTypes.bool,
  tv: PropTypes.bool,
  parking: PropTypes.bool,
};

export default PlaceInfo;
