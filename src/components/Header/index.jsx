import { Link, useLocation } from 'react-router-dom';

import style from './Header.module.scss';

function Header() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className={style.headerContainer}>
      <Link to={'/'} className={style.logoHeader}>Puck.co</Link>
      <div className={style.listContainer}>
        <Link to={'/the-work'} 
          className={`${style.workItemContainer} ${location.pathname === '/the-work' ? style.active : ''}`}>The Work
        </Link>

        <Link to={'/the-contact'} 
          className={`${style.contactItemContainer} ${location.pathname === '/the-contact' ? style.active : ''}`}>The Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;