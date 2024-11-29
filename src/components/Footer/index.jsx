import clsx from "clsx";

import { ImFacebook2, ImInstagram, ImLinkedin } from "react-icons/im";
import { FaSquareDribbble } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";

import style from './Footer.module.scss';
import { useEffect } from "react";
import gsap from "gsap";


function Footer() {

  useEffect(() => {
    const buttons = document.querySelectorAll('#button');
    
    buttons.forEach(button => {
      const handleButtonMouseMove = (e) => {
        gsap.to(button, {
          duration: 1,
          scale:0.8,
          ease: "power3.out"
        })
      };
  
      const handleButtonMouseLeave = () => {
        gsap.to(button, {
          duration: 1,
          scale:1,
          ease: 'elastic.out(1, 0.3)'
        })
      }
      
      button.addEventListener('mousemove', handleButtonMouseMove);
  
      button.addEventListener('mouseleave', handleButtonMouseLeave);
  
  
      return () => {
        button.removeEventListener('mousemove', handleButtonMouseMove);
  
        button.removeEventListener('mouseleave', handleButtonMouseLeave);
      }
    })
  }, []);

  return (
    <footer className={style.footerContainer}>
      <div className={style.footerLogo}>
        <strong>Puck.co</strong>
      </div>
      <div className={style.footerSocials}>
        <a href="https://www.facebook.com/hoangphuc.811" target="_blank" id="button">
          <ImFacebook2 color="#000" size={30}/>
        </a>
        <a href="https://www.instagram.com/puckthemadness/" target="_blank" id="button">
          <ImInstagram color="#000" size={30}/>
        </a>
        <a href="https://www.linkedin.com/in/ho%C3%A0ng-ph%C3%BAc-tr%E1%BA%A7n-46970920b/" target="_blank" id="button">
          <ImLinkedin color="#000" size={30}/>
        </a>
        <a href="https://www.behance.net/pucktran/moodboards" target="_blank" id="button">
          <FaBehanceSquare color="#000" size={35}/>
        </a>
        <a href="https://dribbble.com/hoangphuc811" target="_blank" id="button">
          <FaSquareDribbble color="#000" size={35}/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;