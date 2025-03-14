// components/AnimatedSection/AnimatedSection.tsx
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedSection.module.css';

type AnimatedSectionProps = {
  children: ReactNode;
};

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  return (
    <motion.section
      className={styles.animatedSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
