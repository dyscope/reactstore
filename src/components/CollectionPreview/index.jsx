import React from 'react';
import styles from './collectionPreview.module.css';
import CollectionItem from '../CollectionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className={styles.collection_preview}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.preview}>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
