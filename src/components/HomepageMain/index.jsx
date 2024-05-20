import clsx from 'clsx';
import style from './HomepageMain.module.scss';
import { Link } from 'react-router-dom';

function HomepageMain() {
  return (
    <div className={clsx(style.container, style.noise)}>
      <div className={clsx(style.mainContent)}>
        <h1 className={style.authorName}>PUCK</h1>
        <h1 className={style.pronouns}>🔊\ruh-vee\</h1>
        <ol>
          <li>
            <strong className={style.introduce}>A motion design & branding studio for events, marketing, and entertainment.</strong>
          </li>
          <li>
            <span className={style.contact}>Let’s chat! 📨</span>
            <span className={style.contact}><a href="">work@ravie.co</a></span>
          </li>
        </ol>
        <div className={style.linkPath}>
          <Link class={style.workButton}>the work</Link>
          <Link class={style.contactButton}>the work</Link>
        </div>
      </div>
    </div>
  );
}

export default HomepageMain;