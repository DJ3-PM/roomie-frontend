import React from 'react';
import { Section, HostInfo, HostInfoDetails, HostInfoImg, HostServices, HostServicesDetails, HostServicesImg, HostServicesName, ContactWrapper, BtnContact, DescriptionRoom, DescriptionRoomInfo, DescriptionRoomText } from './styles';
import wifiIcon from '../../assets/static/wifi.svg';
import bathIcon from '../../assets/static/baño.svg';
import parkingIcon from '../../assets/static/parking.svg';
import whatsapp from '../../assets/static/whatsapp.svg';
import email from '../../assets/static/email.svg';

const Host = ({ description, price, wifi, bath, cleaning, closet, tv, parking, profileId: host }) => {
  return (
    <Section>
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
          <BtnContact href={`tel:${host.whatsapp}`}>
            <HostServicesImg src={whatsapp} />
          </BtnContact>
          <BtnContact href={`mailto:${host.contactEmail}`}>
            <HostServicesImg src={email} />
          </BtnContact>
        </ContactWrapper>
      </HostInfo>
      <DescriptionRoom>
        <DescriptionRoomInfo>
          <h3>DESCRIPCION</h3>
          <DescriptionRoomText>{description}</DescriptionRoomText>
        </DescriptionRoomInfo>
        <DescriptionRoomInfo>
          <h3>EL ESPACIO</h3>
          <DescriptionRoomText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore molestias itaque iure laudantium nisi corrupti odio asperiores odit eos iste quae, dicta fuga minima sed perspiciatis at quibusdam neque nam!
          </DescriptionRoomText>
        </DescriptionRoomInfo>
        <DescriptionRoomInfo>
          <h3>ACCESO DE LOS HUÉSPEDES</h3>
          <DescriptionRoomText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, dolore? Facere repudiandae temporibus tenetur veritatis, mollitia debitis dolores sapiente earum ipsam illo voluptatum magnam voluptatibus commodi delectus a deserunt voluptates!Asperiores veritatis molestiae nemo, quae sequi numquam non nam ullam et consequatur, necessitatibus quaerat vel doloremque? Quam ipsa odio explicabo placeat culpa natus? Animi aperiam consectetur iste suscipit aliquid quod.
          </DescriptionRoomText>
        </DescriptionRoomInfo>
      </DescriptionRoom>
    </Section>
  );
};

export default Host;
