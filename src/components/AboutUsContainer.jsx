import React from 'react';
import AboutUs from './AboutUs';
import PropTypes from "prop-types";
import styles from "../../public/css/aboutUs.module.css";

function AboutUsContainer({aboutUs}) {
  return (
    <section id="about-us" className={styles['about-us']}> {aboutUs.map((aboutUs, index) => (
        <AboutUs key={index}
        title={aboutUs.title}
        description={aboutUs.description}
        image={aboutUs.image}
        imageAlt={aboutUs.imageAlt}
        />
    ))}
    </section>
  );
}

AboutUsContainer.propTypes = {
    aboutUs: PropTypes.arrayOf(
        PropTypes.shape({
            title:PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            imageAlt:PropTypes.string.isRequired,
        })
    )
}

export default AboutUsContainer;