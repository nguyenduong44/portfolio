import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './ContactComponent.module.scss';

function ContactComponent() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0px7yn7', 'template_8026hud', form.current, {
        publicKey: 'AkcaXgCwxT22AXWK_',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <div className={style.contactContainer}>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default ContactComponent;