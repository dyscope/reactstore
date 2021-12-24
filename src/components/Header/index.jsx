import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ currentUser }) => {
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
          {currentUser ? (
            <Link to="/profile">{currentUser.displayName}</Link>
          ) : null}
          {currentUser ? (
            <div className={styles.signout_link} onClick={() => auth.signOut()}>
              <FontAwesomeIcon icon={faSignOutAlt} title="Sign out" />
            </div>
          ) : (
            <Link to="/login">Log in</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
