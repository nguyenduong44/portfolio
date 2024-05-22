import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from './ContactComponent.module.scss';
import clsx from 'clsx';

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
    <div className={clsx(style.contactContainer)}>
      <form ref={form} onSubmit={sendEmail} className={style.contactLeft}>
        <div className={style.contactTitle}>Nice to meet you! Let's work together</div>
        <label>Name</label>
        <input type="text" name="user_name" placeholder='Puck Tran' className={style.contactInput} required/>
        <label>Email</label>
        <input type="email" name="user_email" placeholder='puckthemadness@gmail.com' className={style.contactInput} required/>
        <label>Message for me</label>
        <textarea name="message" placeholder='do me a favor' className={`${style.contactInput} ${style.textArea}`} required/>
        <input type="submit" value="Send" className={style.submitButton}/>
      </form>
      <div className={style.contactRight}>
        <div className={style.contactMail}>
          <h1>Let’s make something delightful!</h1>
          <p>phuc.op69@gmail.com</p>
        </div>
        <div className={style.contactSocials}>
          <h1>Socials</h1>
          <a href="https://www.facebook.com/hoangphuc.811" target="_blank">Facebook</a>
          <a href="https://www.instagram.com/puckthemadness" target="_blank">Instagram</a>
          <a href="https://www.linkedin.com/in/ho%C3%A0ng-ph%C3%BAc-tr%E1%BA%A7n-46970920b/" target="_blank">Linkedin</a>
          <a href="https://www.behance.net/pucktran/moodboards" target="_blank">Behance</a>
          <a href="https://dribbble.com/hoangphuc811" target="_blank">Dribbble</a>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;