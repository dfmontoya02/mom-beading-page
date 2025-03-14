// components/FlashCard/FlashCard.tsx
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './FlashCard.module.css';

type FlashCardProps = {
  title: string;
  content: ReactNode;
  imageSrc?: string;
};

export default function FlashCard({ title, content, imageSrc }: FlashCardProps) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
    >
      {imageSrc && <img src={imageSrc} alt={title} className={styles.image} />}
      <h3>{title}</h3>
      <p>{content}</p>
    </motion.div>
  );
}
