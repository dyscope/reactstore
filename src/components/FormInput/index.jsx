import React from 'react';
import styles from './forminput.module.css';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className={styles['field-box']}>
      {label ? <label htmlFor={otherProps.id}>{label}</label> : null}
      <input onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
