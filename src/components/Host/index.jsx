import React from 'react';
import { HostInfo, HostInfoDetails, HostInfoImg, HostServices, HostServicesDetails, HostServicesImg, HostServicesName, ContactWrapper, BtnContact } from './styles';
import wifiIcon from '../../assets/static/wifi.svg';
import bathIcon from '../../assets/static/baño.svg';
import parkingIcon from '../../assets/static/parking.svg';
import whatsappIcon from '../../assets/static/whatsapp.svg';
import emailIcon from '../../assets/static/email.svg';

const Host = ({ price, wifi, bath, cleaning, closet, tv, parking, profileId: host }) => {
  const customMessage = `Hola%20estoy%20interesado%20en%20el%20departamento`;

  return (
    <HostInfo>
      <HostInfoDetails>
        <HostInfoImg src={host.avatar} alt='Imagen del host' />
        <h3>{`${host.firstname} ${host.lastname}`}</h3>
        <p>{`${price} COP / Día`}</p>
      </HostInfoDetails>
      <HostServices>

        {
          wifi ? (
            <>
              <HostServicesDetails>
                <HostServicesImg src={wifiIcon} alt='Imagen del servicio wifi' />
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
                <HostServicesImg src={bathIcon} alt='Imagen del servicio baño' />
                <HostServicesName>Baño Privado</HostServicesName>
              </HostServicesDetails>
            </>
          ) : ''
        }
        {
          parking ? (
            <>
              <HostServicesDetails>
                <HostServicesImg src={parkingIcon} alt='Imagen del servicio parking' />
                <HostServicesName>Parqueadero</HostServicesName>
              </HostServicesDetails>
            </>
          ) : ''
        }
        {
          tv ? (
            <>
              <HostServicesDetails>
                <HostServicesImg src={wifiIcon} alt='Imagen del servicio netflix' />
                <HostServicesName>Netflix</HostServicesName>
              </HostServicesDetails>
            </>
          ) : ''
        }
      </HostServices>
      <ContactWrapper>
        <BtnContact href={`https://wa.me/${host.whatsapp}/?text=${customMessage}`}>
          <HostServicesImg src={whatsappIcon} />
        </BtnContact>
        <BtnContact href={`mailto:${host.contactEmail}`}>
          <HostServicesImg src={emailIcon} />
        </BtnContact>
      </ContactWrapper>
    </HostInfo>
  );
};

export default Host;
