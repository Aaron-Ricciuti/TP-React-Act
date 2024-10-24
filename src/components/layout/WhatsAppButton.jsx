import React from 'react';
import PropTypes from 'prop-types';
import logoWsp from "../../../public/img/whatsapp.png";
import styles from '../../../public/css/header.module.css';

function WhatsAppButton({ link }) {
  return (
    <a href={link}>
      <img className={styles['logo-wsp']} src={logoWsp} alt="whatsapp" />
    </a>
  );
}

WhatsAppButton.propTypes = {
  link: PropTypes.string.isRequired, 
};

export default WhatsAppButton;
