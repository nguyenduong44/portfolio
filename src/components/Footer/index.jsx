import clsx from "clsx";

import { ImFacebook2, ImInstagram, ImLinkedin } from "react-icons/im";
import { FaSquareDribbble } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";

import style from './Footer.module.scss';


function Footer() {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerLogo}>
        <strong>Puck.co</strong>
      </div>
      <div className={style.footerPrivacy}>
        <p>2024 Ravie LLC All Rights Reserved</p>
      </div>
      <div className={style.footerSocials}>
        <a href="https://www.facebook.com/hoangphuc.811" target="_blank"> 
          <ImFacebook2 color="#000" size={30}/>
        </a>
        <a href="https://www.instagram.com/puckthemadness/" target="_blank">
          <ImInstagram color="#000" size={30}/>
        </a>
        <a href="https://www.linkedin.com/in/ho%C3%A0ng-ph%C3%BAc-tr%E1%BA%A7n-46970920b/" target="_blank">
          <ImLinkedin color="#000" size={30}/>
        </a>
        <a href="https://www.behance.net/pucktran/moodboards" target="_blank">
          <FaBehanceSquare color="#000" size={35}/>
        </a>
        <a href="https://dribbble.com/hoangphuc811" target="_blank">
          <FaSquareDribbble color="#000" size={35}/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;