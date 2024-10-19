import React from 'react';
import PropTypes from "prop-types";
import styles from "../../../public/css/footer.module.css";

function Footer({ description= "Copyright © 2024 Aaron Ricciuti" }) {
  return (
    <footer>
        <div className={styles['footer-container']}>
            <p>{description}</p>
        </div>
    </footer>
  );
}

Footer.propTypes = {
    description: PropTypes.string,
};

export default Footer;