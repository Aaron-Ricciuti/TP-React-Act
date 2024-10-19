import React from 'react';
import PropTypes from "prop-types";
import styles from "../../public/css/gallery.module.css";

function GalleryItem({ image }) {
  return (
     <article className={styles['galeria-img-container']}>
         <img src={image} alt="Imagen Galeria"/>
     </article>
  );
}

GalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
};

export default GalleryItem;