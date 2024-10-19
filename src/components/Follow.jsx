import PropTypes from "prop-types";
import styles from "../../public/css/follow.module.css";

function Follow({ link, icon }) {
  return (
          <div className={styles.icon}>
             <a href={link}>
             <i className={`${icon} ${styles.icon}`}></i>
             </a>
          </div>
  );
}

Follow.propTypes ={
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Follow;