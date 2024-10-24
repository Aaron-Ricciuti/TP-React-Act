import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../public/css/header.module.css';

function SearchForm({ placeholder, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);  
    setSearchTerm('');
  };

  return (
    <form className={styles['agrandado-form']} onSubmit={handleSubmit}>
      <input
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

SearchForm.propTypes = {
  placeholder: PropTypes.string.isRequired,  
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
