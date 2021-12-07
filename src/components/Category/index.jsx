import styles from './category.module.css';

const Category = ({ id, title, imageUrl, size }) => {
  return (
    <div
      id={`category-${id}`}
      className={`${styles.category} ${size ? styles.large : ''}`}
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

export default Category;
