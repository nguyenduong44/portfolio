import { useEffect } from 'react';
import style from './HomepageMain.module.scss';

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

    const defaultScale = 2.6;
    const maxScale = 5;
    const neighborScale = 3;

    const textContainer = document.querySelector('#channel-link');
    const spans = textContainer.querySelectorAll("span");

    const handleMouseMove = (e) => {
      const target = e.target;
      const index = Array.from(spans).indexOf(target);
      
      spans.forEach((span, i) => {
        let scale = defaultScale;
        if(i === index){
          scale = maxScale;
        }else if(i === index - 1 || i === index + 1){
          scale = neighborScale;
        }

        span.style.fontSize = `${scale}rem`;
      });
    };

    const handleMouseLeave = () => {
      spans.forEach(span => {
        span.style.fontSize = `${defaultScale}rem`;
      });
    }

    textContainer.addEventListener('mousemove', handleMouseMove);

    textContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      textContainer.removeEventListener('mousemove', handleMouseMove);

      textContainer.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [])

  return (
    <a 
      id='channel-link'
      data-animate="font-weight"
      className={`${style.underline}`}
      target='_blank'
      href="mailto:phuc.op69@gmail.com"
      >phuc.op69@gmail.com
    </a>
  );
}

export default FloatingEmail;