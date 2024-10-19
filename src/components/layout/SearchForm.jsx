import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../public/css/header.module.css';

function SearchForm({ placeholder, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);  // Llamada a la función onSearch pasada por props
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

// Definición de PropTypes
SearchForm.propTypes = {
  placeholder: PropTypes.string.isRequired,  // El placeholder debe ser un string y es obligatorio
  onSearch: PropTypes.func.isRequired,       // onSearch debe ser una función y es obligatorio
};

export default SearchForm;
