import styles from './category.module.css';

const Category = ({ id, title, imageUrl }) => {
  return (
    <div
      id={`category-${id}`}
      className={styles.category}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>Subtitle</h3>
      </div>
    </div>
  );
};

export default Category;
