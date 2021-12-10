import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

const Header = () => {
  return (
    <div className="container">
      <div className={styles.header}>
        <Link className={styles.logo_container} to="/">
          <Logo className={styles.logo} />
          <span className={styles.brand}>React Store</span>
        </Link>
        <div className={styles.header_menu}>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
