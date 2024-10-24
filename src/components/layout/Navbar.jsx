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

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,  
      href: PropTypes.string.isRequired,  
    })
  ).isRequired,
};

export default NavBar;
