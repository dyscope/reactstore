import React from 'react';
import Categories from '../../components/Categories';
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
