import React from 'react';
import Categories from '../../Categories';
import styles from './homepage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className="container">
        <Categories />
      </div>
    </div>
  );
};

export default HomePage;
