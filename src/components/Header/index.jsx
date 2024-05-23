import { Link, useLocation } from 'react-router-dom';

import style from './Header.module.scss';

function Header() {
  const location = useLocation();
  return (
    <div className={style.headerContainer} style={{
        backgroundColor: location.pathname === '/the-work' ? '#000' : ''
    }}>
      <Link to={'/'} className={style.logoHeader}
        style={{
          color: location.pathname === '/the-work' ? '#fff' : '',
        }}
      >Puck.co</Link>
      <div className={style.listContainer}>
        <Link to={'/the-work'} 
          className={`${style.workItemContainer} ${location.pathname === '/the-work' ? style.active : ''}
            ${style.rollingText}
          `}
          style={{
            color: location.pathname === '/the-work' ? '#fff' : '',
          }}
          >The Work
        </Link>

        <Link to={'/the-contact'} 
          className={`${style.contactItemContainer} ${location.pathname === '/the-contact' ? style.active : ''}
            ${style.rollingText}
          `}
          style={{
            color: location.pathname === '/the-work' ? '#fff' : '',
          }}
          >The Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;