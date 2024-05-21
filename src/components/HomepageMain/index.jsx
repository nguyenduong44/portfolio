import { useEffect, useLayoutEffect, useRef } from 'react';
import clsx from 'clsx';
import style from './HomepageMain.module.scss';
import { Link } from 'react-router-dom';
import {gsap} from 'gsap';

function HomepageMain() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#text-intro", {
        opacity: 0,
        y: "+=30",
        duration: 1
      }).to("#text-intro", {
        opacity: 0,
        y: "-=30",
        delay: 0.5
      }).to("#intro-slider", {
        yPercent: "-100",
        duration: 1
      }).
      from("#author-text", {
        opacity: 0,
        y: "-=30",
        duration: 0.5
      }).from("#pronouns-text", {
        opacity: 0,
        x: "-=30",
        duration: 0.5,
      }).from("#introduce-text", {
        opacity: 0,
        x: "+=30",
        duration: 0.5,
      }).from("#button-slide", {
        opacity: 0,
        y: "+=30",
        duration: 0.5,
      });
    }, containerRef);
    return () => ctx.revert();
  },[]);

  return (
    <div className={clsx(style.container, style.noise)} ref={containerRef}>
      <div id='intro-slider' className={style.introBackground}>
        <h1 id='text-intro'>WELCOME <br/> I'M A DESIGNER</h1>
      </div>
      <div className={clsx(style.mainContent)}>
        <h1 id='author-text' className={style.authorName}>TRAN HOANG PHUC</h1>
        <h1 id='pronouns-text' className={style.pronouns}>🔊\pʌk\</h1>
        <ol id='introduce-text'>
          <li>
            <strong className={style.introduce}>A highly adaptable individual 
                    who is always willing to work 
                    under pressure. A young person 
                    with a sense of responsibility 
                    wanting to be an expert in the 
                    field. An ambitous heart 
                    desires to dedicate the best of itself.
            </strong>
          </li>
          <li>
            <span className={style.contact}>Let’s chat! 📨</span>
            <span className={style.contact}><a className={style.underline} href="">phuc.op69@gmail.com</a></span>
          </li>
        </ol>
        <div id='button-slide' className={style.linkPath}>
          <Link to={'/the-work'} class={style.workButton}>the work</Link>
          <Link to={'/the-contact'} class={style.contactButton}>contact</Link>
        </div>
      </div>
      
    </div>
  );
}

export default HomepageMain;