import Category from '../Category';
import styles from './categories.module.css';

const Categories = () => {
  return (
    <div className={styles.categories}>
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  );
};

export default Categories;
