import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './navbar';
import SearchForm from './SearchForm';
import WhatsAppButton from './WhatsAppButton';
import styles from '../../../public/css/header.module.css';


function Header({ title, navLinks, whatsappLink, searchPlaceholder, onSearch }) {
  return (
    <header id="start" className={styles['start']}>
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

Header.propTypes = {
    title: PropTypes.string.isRequired,  
    navLinks: PropTypes.arrayOf(         
      PropTypes.shape({
        label: PropTypes.string.isRequired,  
        href: PropTypes.string.isRequired,  
      })
    ).isRequired,
    whatsappLink: PropTypes.string.isRequired, 
    searchPlaceholder: PropTypes.string.isRequired, 
    onSearch: PropTypes.func.isRequired,     
  };

export default Header;
