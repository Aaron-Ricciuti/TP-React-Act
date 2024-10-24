import PropTypes from "prop-types";
function CarouselItem({
  imageSrc,
  imageAlt,
  active,
  imgClass
}) {
  return (
    <div
    className={`carousel-item ${active ? "active" : ""} `}>
        <img src={imageSrc} className={`${imgClass} d-block w-100`} alt={imageAlt} />
  </div>
  );
}

CarouselItem.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    imgClass: PropTypes.string,
  };
  
export default CarouselItem;