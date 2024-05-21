import clsx from "clsx";

import { ImFacebook2, ImInstagram, ImLinkedin } from "react-icons/im";

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
        <a href="">
          <ImLinkedin color="#000" size={30}/>
        </a>
      </div>
    </footer>
  );
}

export default Footer;