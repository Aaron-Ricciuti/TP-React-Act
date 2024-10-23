import React from 'react';
import PropTypes from "prop-types";
import styles from "../../public/css/cajonde12.module.css";
import Cajondoblede10 from './Cajondoblede10';

function Cajondoblede10Container( {products2} ) {
    console.log('products:', products2);
    
  return (
    <section className={styles['product-container']}>
            {products2.map((product, index) => (
                <Cajondoblede10
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

Cajondoblede10Container.propTypes = {
    products2: PropTypes.arrayOf(
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
export default Cajondoblede10Container;