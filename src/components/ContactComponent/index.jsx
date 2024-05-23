import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './ContactComponent.module.scss';
import clsx from 'clsx';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"

import RandomTextHover from './RandomTextHover.jsx';
import FloatingEmail from './FLoatingEmail.jsx';

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
          Toastify({
            text: "Success sending message to Puck",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", 
            position: "left", 
            stopOnFocus: true,
            close: false,
            style: {
              background: "rgb(149, 248, 0)",
              fontSize: "2rem",
              color: "rgb(57, 54, 50)",
              fontWeight: "600"
            }
          }).showToast();
        },
        (error) => {
          alert(error.message);
        },
      );
  };

  return (
    <div className={clsx(style.contactContainer)}>
      <form ref={form} onSubmit={sendEmail} className={style.contactLeft}>
        <div className={style.contactTitle}>Nice to meet you! Let's work together</div>
        <label>Name</label>
        <input type="text" name="user_name" placeholder='Puck Tran' className={style.contactInput} required/>
        <label>Email</label>
        <input type="email" name="user_email" placeholder='puckthemadness@gmail.com' className={style.contactInput} required/>
        <label>Message for me</label>
        <textarea name="message" placeholder='do me a favor' className={`${style.contactInput} ${style.textArea}`} required/>
        <button id="button-send" type="submit" className={`${style.submitButton} ${style.submitButton1}`}>Send</button>
      </form>
      <div className={style.contactRight}>
        <div className={style.contactMail}>
          <h1>Let’s make something delightful!</h1>
          <FloatingEmail />
        </div>
        <div className={style.contactSocials}>
          <RandomTextHover />
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;