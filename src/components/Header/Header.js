import Logo from '../../assets/images/LOGO-1.png';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header
      className={`${styles.containerHeader} d-flex justify-content-spacebetween align-items-center mt-40 mx-100 mb-20`}
    >
      <Link to="/">
        {' '}
        <img className={styles.logo} src={Logo} alt="Logo-Kasa" />
      </Link>
      <ul className={`${styles.linkHeader} d-flex`}>
        <NavLink
          className={({ isActive }) => (isActive ? `${styles.linkActive}` : '')}
          to="/"
          style={{ marginRight: '20px' }}
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? `${styles.linkActive}` : '')}
          to="/apropos"
        >
          A propos
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
