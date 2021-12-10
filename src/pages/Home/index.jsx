import React from 'react';
import Categories from '../../components/Categories';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="container">
        <Categories />
      </div>
    </div>
  );
};

export default Home;
