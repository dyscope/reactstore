import styles from './category.module.css';

const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.content}>
        <h2 className={styles.title}>Title</h2>
        <h3 className={styles.subtitle}>Subtitle</h3>
      </div>
    </div>
  );
};

export default Category;
