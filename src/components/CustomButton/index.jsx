import React from 'react';
import styles from './custombutton.module.css';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className={styles['custom-btn']} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
