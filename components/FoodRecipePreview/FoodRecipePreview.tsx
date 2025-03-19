import Link from 'next/link';
import styles from './FoodRecipePreview.module.css';

type FoodRecipePreviewProps = {
  id: string;
  title: string;
  description: string;
};

export default function FoodRecipePreview({ id, title, description }: FoodRecipePreviewProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Link href={`/food/${id}`} className={styles.readMore}>
          View Recipe
        </Link>
      </div>
    </div>
  );
}
