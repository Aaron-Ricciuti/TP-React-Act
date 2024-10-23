import PropTypes from "prop-types";
import styles from "../../public/css/rackera6x9.module.css"
function CarouselItem({
  imageSrc,
  imageAlt,
  active,
}) {
  return (
    <div
    className={`carousel-item ${active ? "active" : ""} `}>
     <img src={imageSrc} className={`${styles.image} d-block w-100`} alt={imageAlt} />
  </div>
  );
}

CarouselItem.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  };
  
export default CarouselItem;