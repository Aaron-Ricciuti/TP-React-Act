import PropTypes from "prop-types";
import styles from "../../public/css/aboutUs.module.css"

function AboutUs( {title, description, image, imageAlt} ) {
  return (
    <article className={styles['about-container']}>
      <div>
          <h2>{title}</h2>
          <hr/>
          <p>{description}</p>
      </div>
      <img src={image} alt={imageAlt}/>
    </article>
  );
}

AboutUs.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
};

export default AboutUs;