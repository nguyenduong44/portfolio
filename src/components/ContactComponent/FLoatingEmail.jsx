import { useEffect } from 'react';
import style from './ContactComponent.module.scss';

function FloatingEmail() {

  useEffect(() => {
    const enhance = id => {
      const element = document.getElementById(id),
            text = element.innerText.split("");
      
      element.innerText = "";
  
      text.forEach(letter => {
        const span = document.createElement("span");
        span.className = style.letter;
        span.innerText = letter;
  
        element.appendChild(span);
      });
    }
  
    enhance("channel-link");
  }, [])

  return (
    <a
      id="channel-link"
      className={`${style.fancy}`}
      target='_blank'
      href="mailto:phuc.op69@gmail.com"
    >phuc.op69@gmail.com</a>
  );
}

export default FloatingEmail;