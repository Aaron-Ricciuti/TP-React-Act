import GalleryItem from "./GalleryItem";
import PropTypes from "prop-types";
import styles from "../../public/css/gallery.module.css";

function GalleryContainer({ title, images}) {
  return (
    <section id="product" className={styles.product}>
        <h2>{title}</h2>
        <div className={styles['galeria-container']}>
           {images.map((image, index) => (
            <GalleryItem key={index} image={image} />
           ))}
        </div>
    </section>
  
  );
}

GalleryContainer.propTypes = {
    title: PropTypes.string,
    image: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default GalleryContainer;