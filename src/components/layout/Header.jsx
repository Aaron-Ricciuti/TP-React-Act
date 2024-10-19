import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './navbar';
import SearchForm from './SearchForm';
import WhatsAppButton from './WhatsAppButton';
import styles from '../../../public/css/header.module.css';


function Header({ title, navLinks, whatsappLink, searchPlaceholder, onSearch }) {
  return (
    <header id="start">
       <div className={styles['nav-container']}>
        <h1>{title}</h1>
        <SearchForm placeholder={searchPlaceholder} onSearch={onSearch} />
      </div>
      <NavBar links={navLinks} />
      <a href="#start">
      <i className={`fa-solid fa-chevron-up ${styles.faSolid}`}></i>
      </a>
      <WhatsAppButton link={whatsappLink} />
    </header>
  );
}
// Definición de PropTypes
Header.propTypes = {
    title: PropTypes.string.isRequired,  // El título debe ser un string y es obligatorio
    navLinks: PropTypes.arrayOf(         // navLinks es un array de objetos
      PropTypes.shape({
        label: PropTypes.string.isRequired,  // Cada objeto debe tener un string 'label'
        href: PropTypes.string.isRequired,   // Cada objeto debe tener un string 'href'
      })
    ).isRequired,
    whatsappLink: PropTypes.string.isRequired, // La URL de WhatsApp debe ser un string
    searchPlaceholder: PropTypes.string.isRequired, // El placeholder debe ser un string
    onSearch: PropTypes.func.isRequired,     // La función onSearch debe ser una función
  };

export default Header;
