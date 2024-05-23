import { useEffect, useLayoutEffect, useRef } from 'react';
import clsx from 'clsx';
import style from './HomepageMain.module.scss';
import { Link } from 'react-router-dom';
import {gsap} from 'gsap';
import avatar from '../../assets/img/avatar.jpg';
import FloatingEmail from './FloatingEmail';

function HomepageMain() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const authorTextRef = useRef(null);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);

  const move = (e) => {
    const elRect = containerRef.current.getBoundingClientRect();
    const top = e.clientY - elRect.top;
    const left = e.clientX - elRect.left;
    
    const vel = { x: e.clientX - lastXRef.current, y: e.clientY - lastYRef.current };
    const angle = vel.x * 0.05 * 180 / Math.PI;
    
    gsap.to(imageRef.current, {
      top: top,
      left: left,
      rotate: angle,
    });

    lastXRef.current = e.clientX;
    lastYRef.current = e.clientY;
  };

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


      const imageElm = imageRef.current;

      // Initial GSAP settings for the image
      gsap.set(imageElm, { autoAlpha: 1, scale: 0.001 });
      setTimeout(() => {
        gsap.set(imageElm, { autoAlpha: 0, scale: 0.4 });
      }, 100);

      const showImage = (show) => {
        gsap.to(imageElm, {
          autoAlpha: show ? 1 : 0,
          scale: show ? 1 : 0.4,
          ease: show ? "power3.in" : "power3.out",
          duration: 0.5
        });
      };

      const authorText = authorTextRef.current;
      if (authorText) {
        authorText.addEventListener('mouseenter', () => {
          showImage(true);
          window.addEventListener('mousemove', move);
        });

        authorText.addEventListener('mouseleave', () => {
          showImage(false);
          window.removeEventListener('mousemove', move);
        });
      }

    }, containerRef);
    return () =>
    {
      ctx.revert();
    }
  },[]);

  return (
    <div className={clsx(style.container, style.noise)} ref={containerRef}>
      <div id='intro-slider' className={style.introBackground}>
        <h1 id='text-intro'>WELCOME <br/> I'M A DESIGNER</h1>
      </div>
      <div className={clsx(style.mainContent)}>
        <h1 ref={authorTextRef} id='author-text' className={style.authorName}>TRAN HOANG PHUC
        <img src={avatar} alt="hover img" ref={imageRef} className={style.hoverImage}/>
        </h1>
        <br/>
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
            <span className={style.contact}>
              <FloatingEmail />
            </span>
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