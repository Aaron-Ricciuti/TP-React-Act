import React from 'react';
import PropTypes from "prop-types";
import styles from "../../public/css/Rackera6x9.module.css";
import Rackera6x9 from './Rackera6x9';

function Rackera6x9Container( {products3} ) {
    console.log('products:', products3);
    
  return (
    <section className={styles['product-container']}>
            {products3.map((product, index) => (
                <Rackera6x9
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

Rackera6x9Container.propTypes = {
    products3: PropTypes.arrayOf(
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
export default Rackera6x9Container;