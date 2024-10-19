import React from 'react';
import Contact from './Contact';
import PropTypes from "prop-types";
import styles from "../../public/css/contact.module.css";


function ContactContainer({ contacts = [] }) {
  return (
    <section id="contact" className={styles.contact}>
      {contacts.map((contact, index) => (
        <Contact 
          key={index}
          image={contact.image}
          title={contact.title}
          text={contact.text}
          message={contact.message}
          selector={contact.selector}
          option={contact.option}
          optionItem={contact.optionItem}
          question={contact.question}
          textEmail={contact.textEmail}
          textPhone={contact.textPhone}
          send={contact.send}
          reset={contact.reset}
        />
      ))}
    </section>
  );
}


ContactContainer.propTypes ={
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            image:PropTypes.string.isRequired,
            title:PropTypes.string.isRequired,
            text:PropTypes.string.isRequired,
            message:PropTypes.string.isRequired,
            selector:PropTypes.string.isRequired,
            option:PropTypes.string.isRequired,
            optionItem:PropTypes.string.isRequired,
            question:PropTypes.string.isRequired,
            textEmail:PropTypes.string.isRequired,
            textPhone:PropTypes.string.isRequired,
            send:PropTypes.string.isRequired,
            reset:PropTypes.string.isRequired,
        })
    )
};

export default ContactContainer;