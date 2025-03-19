import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './FoodRecipeSlider.module.css';

type Recipe = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

type FoodRecipeSliderProps = {
  recipes: Recipe[];
};

export default function FoodRecipeSlider({ recipes }: FoodRecipeSliderProps) {
  const [current, setCurrent] = useState(0);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % recipes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [recipes.length]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className={styles.slider}>
      {recipes.map((recipe, index) => (
        <div
          key={recipe.id}
          className={`${styles.slide} ${index === current ? styles.active : ''}`}
        >
          <Link href={`/food/${recipe.id}`} className={styles.slideLink}>
            <img
              src={recipe.imageSrc}
              alt={recipe.title}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          </Link>
        </div>
      ))}
      <div className={styles.dots}>
        {recipes.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
