import PropTypes from "prop-types";
import React, {useState} from "react";
import styles from "../../public/css/contact.module.css";

function Contact({ image, title, text, message, selector, option, optionItem, question, textEmail, textPhone, send, reset }) {
  
    const [values, setValues] = useState({
        name: '',
        email:'',
        phone: '',
        message: '',
        contactMethod: '',
    })

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:e.target.value,})
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values);
    };

    return (
    <section id="contact" className={styles.contact}>
            <div className={styles['contact-img-wrapper']}>
                <img src={image} alt="local"/>
            </div>

            <div className={styles['contact-right-side']}>
                <h1 className={styles['contact-title']}>{title}</h1>

                <form className={styles['contact-form-wrapper']}
                onSubmit={handleSubmit}>
                    <div className={styles['contact-input']}>
                        <label htmlFor="name">{text.name}</label>
                        <input type="text" name="name"
                        onChange={(e) =>handleChanges(e)} required/>
                    </div>

                    <div className={styles['contact-input']}>
                        <label htmlFor="email">{text.email}</label>
                        <input type="email" name="email"
                        onChange={(e) =>handleChanges(e)} required/>
                    </div>

                    <div className={styles['contact-input']}>
                        <label htmlFor="phone">{text.phone}</label>
                        <input type="phone" name="phone"
                        onChange={(e) =>handleChanges(e)} required/>
                    </div>

                    <div className={styles['contact-input']}>
                        <label htmlFor="message">{message}</label>
                        <textarea type="message" name="message"
                        onChange={(e) =>handleChanges(e)} required></textarea>
                    </div>

                    <div className={styles['contact-input']}>
                        <div className={styles['select-container']}>
                            <label htmlFor="opciones">{selector}</label>
                            <select name="selector" onChange={(e) =>handleChanges(e)} required>
                                <option value="">{option}</option>
                                <option value="3 puertas">{optionItem.three}</option>
                                <option value="4 puertas">{optionItem.four}</option>
                                <option value="5 puertas">{optionItem.five}</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.container}>
                        <label>{question}</label>
                        <div className={styles['radio-container']}>
                            <input type="radio" name="contactMethod" value="email" id="email"
                            onChange={(e) =>handleChanges(e)} required/>
                            <label className={styles['label-container']} htmlFor="email">{textEmail}</label>
                            <input type="radio" id="phone" name="contactMethod" value="phone"
                            onChange={(e) =>handleChanges(e)} required/>
                            <label className={styles['label-container']} htmlFor="phone">{textPhone}</label>
                        </div>
                    </div>

                    <div className={styles['button-container']}>
                        <button className={styles['button-submit']} type="submit" >{send}</button>
                        <button className={styles['button-delete']} type="reset" >{reset}</button>
                    </div>
                </form>
            </div>
        </section>
  )
}

Contact.propTypes ={
            image:PropTypes.string.isRequired,
            title:PropTypes.string.isRequired,
            text:PropTypes.shape({
                name: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
                phone: PropTypes.string.isRequired,
            }),
            message:PropTypes.string.isRequired,
            selector:PropTypes.string.isRequired,
            option:PropTypes.string.isRequired,
            optionItem:PropTypes.shape({
               three: PropTypes.string,
               four: PropTypes.string,
               five: PropTypes.string,
           }),
            question:PropTypes.string.isRequired,
            textEmail:PropTypes.string.isRequired,
            textPhone:PropTypes.string.isRequired,
            send:PropTypes.string.isRequired,
            reset:PropTypes.string.isRequired,   
};

export default Contact;