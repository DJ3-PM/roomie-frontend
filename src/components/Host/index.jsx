import React from 'react';
import { Section, HostInfo, HostInfoDetails, HostInfoImg, HostServices, HostServicesDetails, HostServicesImg, HostServicesName, BtnContact, DescriptionRoom, DescriptionRoomInfo, DescriptionRoomText } from './styles';
import avatar from '../../assets/static/avatar.jpg';
import wifi from '../../assets/static/wifi.svg';
import bathroom from '../../assets/static/baño.svg';
import parking from '../../assets/static/parking.svg';

const Host = () => {
  return (
    <Section>
      <HostInfo>
        <HostInfoDetails>
          <HostInfoImg src={avatar} alt='Imagen del host' />
          <h3>Jesús Montero</h3>
          <p>100.000 USD / DIA</p>
        </HostInfoDetails>
        <HostServices>
          <HostServicesDetails>
            <HostServicesImg src={wifi} alt='Imagen del servicio wifi' />
            <HostServicesName>Incluye Wifi</HostServicesName>
          </HostServicesDetails>
          <HostServicesDetails>
            <HostServicesImg src={bathroom} alt='Imagen del servicio baño' />
            <HostServicesName>Baño Privado</HostServicesName>
          </HostServicesDetails>
          <HostServicesDetails>
            <HostServicesImg src={parking} alt='Imagen del servicio parking' />
            <HostServicesName>Parqueadero</HostServicesName>
          </HostServicesDetails>
          <HostServicesDetails>
            <HostServicesImg src={wifi} alt='Imagen del servicio netflix' />
            <HostServicesName>Netflix</HostServicesName>
          </HostServicesDetails>
        </HostServices>
        <BtnContact>Contactar</BtnContact>
      </HostInfo>
      <DescriptionRoom>
        <DescriptionRoomInfo>
          <h3>DESCRIPCION</h3>
          <DescriptionRoomText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto nobis nulla, quaerat tempore animi hic fugiat impedit? Voluptate fugit voluptatibus cupiditate aliquid. Accusantium corporis temporibus, eligendi eaque laudantium asperiores! Dolor!Magnam, cum neque eius rerum cumque libero tempore, aliquid praesentium assumenda unde veniam quos id mollitia quis odit laudantium. Pariatur earum hic voluptatem quibusdam enim. Quod quia blanditiis rem in.</DescriptionRoomText>
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
