import React from 'react';
import PropTypes from "prop-types";
import Follow from './Follow';
import styles from "../../public/css/follow.module.css";

function FollowContainer( { title, socials } ) {
  return (
    <section className={styles['follow-container']}>
      <div className={styles['flex-follow']}>
        <h2>{title}</h2>
        <div className={styles.icon}>
          {socials.map((social, index) => (
            <Follow key={index} 
            link={social.link}
            icon={social.icon}   
            /> 
        ))}
        </div>
      </div>
    </section>
  );
}

FollowContainer.propTypes = {
          title: PropTypes.string,
    socials: PropTypes.arrayOf(
        PropTypes.shape({
          link: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FollowContainer;

