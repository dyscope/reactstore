import React from 'react';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import styles from './servicelogin.module.css';

const ServiceLogin = () => {
  return (
    <div className={styles.servicelogin}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default ServiceLogin;
