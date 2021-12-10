import React, { Component } from 'react';
import SHOP_DATA from './shop.data.js';
import styles from './shop.module.css';
import CollectionPreview from '../../components/CollectionPreview';

export default class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="container">
        <div className={styles.shop}>
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
      </div>
    );
  }
}
