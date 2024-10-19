import React from 'react';
import PropTypes from 'prop-types';


function NavBar({ links }) {
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Definición de PropTypes
NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,  // El label es un string y es obligatorio
      href: PropTypes.string.isRequired,   // El href es un string y es obligatorio
    })
  ).isRequired, // Los links son un array de objetos y es obligatorio
};

export default NavBar;
