import React from 'react';
import PropTypes from "prop-types";
import styles from "../../public/css/cajonde12.module.css";
import Cajonde12 from './Cajonde12';

function Cajonde12Container( {products} ) {
    console.log('products:', products);
  return (
    <section className={styles['product-container']}>
            {products.map((product, index) => (
                <Cajonde12
                    key={index}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    additionalInfo={product.additionalInfo}
                    socialLinks={product.socialLinks}
                />
            ))}
        </section>
    );
}

Cajonde12Container.propTypes = {
    products: PropTypes.arrayOf(
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
    ).isRequired,
};
export default Cajonde12Container;