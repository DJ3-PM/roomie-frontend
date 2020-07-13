import React from 'react';
import { Link } from './styles';
import PropTypes from 'prop-types';
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

ProfileInfo.propTypes = {
  _id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  whatsapp: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
};

export default ProfileInfo;
