import React from 'react';
import PropTypes from "prop-types";
import styles from "../../public/css/cajonde12.module.css";
import Cajonde15 from './Cajonde15';

function Cajonde15Container( {products1} ) {
    console.log('products:', products1);
    
  return (
    <section className={styles['product-container']}>
            {products1.map((product, index) => (
                <Cajonde15
                    key={index}
                    title={product.title}
                    price={product.price}
                    description={product.description }
                    additionalInfo={product.additionalInfo}
                    socialLinks={product.socialLinks}
                />
            ))}
        </section>
    );
}

Cajonde15Container.propTypes = {
    products1: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            price: PropTypes.string,
            description: PropTypes.arrayOf(PropTypes.string).isRequired,
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
        })
    ),
};
export default Cajonde15Container;