import React from 'react';
import { Link } from './styles';
import { AiOutlineMail as Email } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';

import { Info, Img, About, ContactWrapper, ContactButton } from './styles';

const ProfileInfo = ({ _id, avatar, firstname, lastname, about, whatsapp, contactEmail }) => {
  const customMessage = 'Hola%20estoy%20interesado%20en%20el%20departamento';

  return (
    <Info>
      <Img src={avatar} alt='Imagen del profile' />
      <Link to={`/profile/${_id}`}>
        <h3>{`${firstname} ${lastname}`}</h3>
      </Link>
      <About>{`${about}`}</About>
      <p>Contact:</p>
      <ContactWrapper>
        <ContactButton target='_blank' href={`https://wa.me/${whatsapp}/?text=${customMessage}`}>
          <FaWhatsapp size='25px' />
        </ContactButton>
        <ContactButton target='_blank' href={`mailto:${contactEmail}`}>
          <Email size='25px' />
        </ContactButton>
      </ContactWrapper>
    </Info>
  );
};

export default ProfileInfo;
