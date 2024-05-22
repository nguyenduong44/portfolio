import gsap from 'gsap';
import { useEffect } from 'react';
import './GlobalStyle.css';

function GlobalStyle({children}) {
  useEffect(() => {
    const cursor = document.querySelector(`.flair`);
    const xTo = gsap.quickTo("#flair", "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo("#flair", "y", { duration: 0.6, ease: "power3" });

    const moveCursor = (e) => {
      const element = e.target;

      const isTargetLinkOrBtn = element?.closest('a') || element?.closest('button') || element?.closest('h1')
      || element?.closest('ol') || element?.closest('Link') || element?.closest('strong') || element?.closest('p') || element?.closest('a') || element?.closest('form');

      if (isTargetLinkOrBtn) {
        cursor.classList.add('active');
      } else {
        cursor.classList.remove('active');
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <>
      <div id='flair' className='flair'></div>
      {children}
    </>
  )
}

export default GlobalStyle;