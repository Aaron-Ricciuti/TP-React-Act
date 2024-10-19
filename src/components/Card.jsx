import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../../public/css/cards.module.css";

function Card({
    image,
    imageAlt,
    title,
    description,
    buttonTitle,   
}) {
  return (
    <div className={styles.card}> 
         <img src={image} className={styles['card-img-top']} alt={imageAlt} />
         <div className={styles['card-body']}>
            <h3 className={styles['card-title']}> {title} </h3>
            <div className={styles['card-text']}> 
            {description.map((desc, index) => (
            <p key={index}>{desc}</p>
            ))}
            </div> 
             <Link to="/Cajonde12" className={styles.btn}> 
              {buttonTitle}
             </Link>
         </div>
     </div>
  );
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    buttonTitle: PropTypes.string.isRequired,
};

export default Card;