import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import styles from "../../public/css/cards.module.css";

function CardContainer({ cards }) {
  return (
  <section className={styles['card-container']}>
    {cards.map((card, index) => (
    <Card 
    key={index}
    image={card.image}
    imageAlt={card.imageAlt}
    title={card.title}
    url={card.url}
    description={card.description}
    buttonTitle={card.buttonTitle}
    /> 
    ))}
  </section>
  );
}

CardContainer.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string.isRequired,
          imageAlt: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.arrayOf(PropTypes.string).isRequired,
          url: PropTypes.string.isRequired,
          buttonTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardContainer;

