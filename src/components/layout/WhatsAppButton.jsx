import React from 'react';
import PropTypes from 'prop-types';
import logoWsp from "../../../public/img/whatsapp.png"
import styles from '../../../public/css/header.module.css';

function WhatsAppButton({ link }) {
  return (
    <a href={link}>
      <img className={styles['logo-wsp']} src={logoWsp} alt="whatsapp" />
    </a>
  );
}

// Definición de PropTypes
WhatsAppButton.propTypes = {
  link: PropTypes.string.isRequired,  // El enlace debe ser un string y es obligatorio
};

export default WhatsAppButton;
