/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { BsWifi } from 'react-icons/bs';
import { FaBath, FaParking, FaWhatsapp } from 'react-icons/fa';
import { MdScreenShare } from 'react-icons/md';
import { AiOutlineMail as Email } from 'react-icons/ai';
import { GiVacuumCleaner as Cleaning, GiClosedDoors as Closet } from 'react-icons/gi';
import ProfileInfo from '../ProfileInfo';
import { Sidebar, HostServices, HostServicesDetails, HostServicesImg, HostServicesName, ContactWrapper, BtnContact } from './styles';

const InfoSidebar = ({ price, wifi, bath, cleaning, closet, tv, parking, profileId: profile }) => {
  const customMessage = 'Hola%20estoy%20interesado%20en%20el%20departamento';

  return (
    <Sidebar>
      <ProfileInfo {...profile} price={price} />
      <HostServices>
        {
          wifi ? (
            <>
              <HostServicesDetails>
                <HostServicesImg>
                  <BsWifi size='25px' />
                </HostServicesImg>
                <HostServicesName>Wi-Fi</HostServicesName>
              </HostServicesDetails>
            </>
          ) :
            ''
        }
        {
          bath ? (
            <>
              <HostServicesDetails>
                <HostServicesImg>
                  <FaBath size='25px' />
                </HostServicesImg>
                <HostServicesName>Private Bathroom</HostServicesName>
              </HostServicesDetails>
            </>
          ) : ''
        }
        {
          parking ? (
            <>
              <HostServicesDetails>
                <HostServicesImg>
                  <FaParking size='25px' />
                </HostServicesImg>
                <HostServicesName>Parking</HostServicesName>
              </HostServicesDetails>
            </>
          ) : ''
        }
        {
          tv ? (
            <>
              <HostServicesDetails>
                <HostServicesImg>
                  <MdScreenShare size='25px' />
                </HostServicesImg>
                <HostServicesName>Cable TV</HostServicesName>
              </HostServicesDetails>
            </>
          ) : ''
        }
        {
          closet ? (
            <>
              <HostServicesDetails>
                <HostServicesImg>
                  <Closet size='25px' />
                </HostServicesImg>
                <HostServicesName>Closet</HostServicesName>
              </HostServicesDetails>
            </>
          ) : ''
        }
        {
          cleaning ? (
            <>
              <HostServicesDetails>
                <HostServicesImg>
                  <Cleaning size='25px' />
                </HostServicesImg>
                <HostServicesName>Cleaning Service</HostServicesName>
              </HostServicesDetails>
            </>
          ) : ''
        }
      </HostServices>
      <p>Contact:</p>
      <ContactWrapper>
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
      </ContactWrapper>
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
