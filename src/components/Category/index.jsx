import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './category.module.css';

const Category = ({ id, title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      id={`category-${id}`}
      className={`${styles.category} ${size ? styles.large : ''}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className={styles.backgroundImg}
        style={{ backgroundImage: `url('${imageUrl}')` }}
      ></div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>Shop Now</h3>
      </div>
    </div>
  );
};

export default withRouter(Category);
