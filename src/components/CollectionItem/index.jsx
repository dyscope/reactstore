import React from 'react';
import styles from './collectionItem.module.css';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className={styles.collectionItem}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className={styles.collectionItem_bottom}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.price}>${price}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
