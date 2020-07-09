import React from 'react';
import { BsWifi } from 'react-icons/bs';
import { FaBath, FaParking, FaWhatsapp } from 'react-icons/fa';
import { MdScreenShare } from 'react-icons/md';
import { AiOutlineMail as Email } from 'react-icons/ai';
import { GiVacuumCleaner as Cleaning, GiClosedDoors as Closet } from 'react-icons/gi';
import { HostInfo, HostAbout, HostInfoDetails, HostInfoImg, HostServices, HostServicesDetails, HostServicesImg, HostServicesName, ContactWrapper, BtnContact } from './styles';

const Host = ({ price, wifi, bath, cleaning, closet, tv, parking, profileId: host }) => {
  const customMessage = 'Hola%20estoy%20interesado%20en%20el%20departamento';

  return (
    <HostInfo>
      <HostInfoDetails>
        <HostInfoImg src={host.avatar} alt='Imagen del host' />
        <h3>{`${host.firstname} ${host.lastname}`}</h3>
        <HostAbout>{`${host.about}`}</HostAbout>
        <p>{`${price} COP / Día`}</p>
      </HostInfoDetails>
      <HostServices>

        {
          wifi ? (
            <>
              <HostServicesDetails>
                <HostServicesImg>
                  <BsWifi size='25px' />
                </HostServicesImg>
                <HostServicesName>Incluye Wifi</HostServicesName>
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
                <HostServicesName>Baño Privado</HostServicesName>
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
                <HostServicesName>Parqueadero</HostServicesName>
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
                <HostServicesName>Netflix</HostServicesName>
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
                <HostServicesName>Netflix</HostServicesName>
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
                <HostServicesName>Netflix</HostServicesName>
              </HostServicesDetails>
            </>
          ) : ''
        }
      </HostServices>
      <ContactWrapper>
        <BtnContact href={`https://wa.me/${host.whatsapp}/?text=${customMessage}`}>
          <HostServicesImg>
            <FaWhatsapp size='25px' />
          </HostServicesImg>
        </BtnContact>
        <BtnContact href={`mailto:${host.contactEmail}`}>
          <HostServicesImg>
            <Email size='25px' />
          </HostServicesImg>
        </BtnContact>
      </ContactWrapper>
    </HostInfo>
  );
};

export default Host;
