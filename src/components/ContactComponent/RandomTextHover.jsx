import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import style from './ContactComponent.module.scss';

const RandomTextHover = () => {
  const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";

  const handleRandomTextHover = (event) => {
      let iterations = 0;
      const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
          .map((letter, index) =>  {
            if(index < iterations){
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        }).join("");

        if(iterations >= event.target.dataset.value.length) clearInterval(interval);
        iterations+= 1;
      }, 30);
  }

  return (
    <div className={style.contactSocials}>
      <h1>Socials</h1>
      <a href="https://www.facebook.com/hoangphuc.811" target="_blank" 
        data-value="Facebook" onMouseEnter={(e) => handleRandomTextHover(e)}
        onMouseLeave={(e) => handleRandomTextHover(e)}
      >Facebook</a>
      <a href="https://www.instagram.com/puckthemadness" target="_blank"
        data-value="Instagram" onMouseEnter={(e) => handleRandomTextHover(e)}
        onMouseLeave={(e) => handleRandomTextHover(e)}
      >Instagram</a>
      <a href="https://www.linkedin.com/in/ho%C3%A0ng-ph%C3%BAc-tr%E1%BA%A7n-46970920b/" target="_blank" 
        data-value="Linkedin" onMouseEnter={(e) => handleRandomTextHover(e)}
        onMouseLeave={(e) => handleRandomTextHover(e)}
      >Linkedin</a>
      <a href="https://www.behance.net/pucktran/moodboards" target="_blank"
        data-value="Behance" onMouseEnter={(e) => handleRandomTextHover(e)}
        onMouseLeave={(e) => handleRandomTextHover(e)}
      >Behance</a>
      <a href="https://dribbble.com/hoangphuc811" target="_blank"
        data-value="Dribbble" onMouseEnter={(e) => handleRandomTextHover(e)}
        onMouseLeave={(e) => handleRandomTextHover(e)}
      >Dribbble</a>
    </div>
  );
};

export default RandomTextHover;