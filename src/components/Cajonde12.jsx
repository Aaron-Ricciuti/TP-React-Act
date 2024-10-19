import React from 'react';
import Footer from './layout/Footer';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Carousel from './carousel';
import styles from "../../public/css/cajonde12.module.css";


function Cajonde12({ title, price, description, additionalInfo, socialLinks }) {
  
  const slides = [
        {
          image: "../public/img/cajon12_1.jpg",
          alt: "cajonde12",
        },
        {
          image: "../public/img/cajon12_2.jpg",
          alt: "cajonde12",
        },
        {
          image: "../public/img/cajon12_3.jpg",
          alt: "cajonde12",
        },
        {
          image: "../public/img/cajon12_4.jpg",
          alt: "cajonde12",
        },
      
      ];
  return ( 
        <>
        <header className={styles['container-title']}>
      <Link to="/"><i className="fa-sharp-duotone fa-solid fa-circle-arrow-left"></i></Link>
      {title}
        </header>
        <main>
        <Carousel slides={slides} />
        <div className={styles['container-info-product']}>
          <div className={styles['container-price']}>
            <span>{price}</span>
          </div>
          <div className={styles['container-description']}>
            <div className={styles['title-description']}>
              <h4>Descripción</h4>
            </div>
               <div className={styles['text-description']}>
                {Array.isArray(description) && description.map((desc, index) => (
                 <p key={index}>{desc}</p>
               ))}
               </div>
            <div className={styles['container-additional-information']}>
              <div className={styles['title-additional-information']}>
                <h4>Información adicional</h4>
              </div>
              <div className={styles['text-additional-information']}>
                  <p>Medidas:</p>
                  {additionalInfo?.dimensions?.map((dimension, index) => (
                      <p key={index}>{dimension}</p>
                  ))}
                  {additionalInfo?.additional && <h4>{additionalInfo.additional}</h4>}
              </div>
              <div className={styles['container-social']}>
                <span>Compartir</span>
                <div className={styles['container-button-social']}>
                    {Array.isArray(socialLinks) && socialLinks.map((link, index) => (
                    <a key={index} href={link.url}>
                      <i className={`fa-brands ${link.icon}`}></i>
                    </a>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      </>
  );
};

Cajonde12.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  additionalInfo: PropTypes.shape({
      dimensions: PropTypes.arrayOf(PropTypes.string),
      additional: PropTypes.string,
  }),
  socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
          url: PropTypes.string,
          icon: PropTypes.string,
      })
  ),
};

export default Cajonde12;