import React from 'react';
import styles from './custombutton.module.css';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? styles['google-sign-btn'] : ''} ${
        styles['custom-btn']
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
