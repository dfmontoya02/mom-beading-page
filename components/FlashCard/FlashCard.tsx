import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './FlashCard.module.css';

type FlashCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
};

export default function FlashCard({ title, description, imageSrc, href }: FlashCardProps) {
  return (
    <Link href={href}>
      <motion.div
        className={styles.card}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
      >
        <img src={imageSrc} alt={title} className={styles.image} />
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}
