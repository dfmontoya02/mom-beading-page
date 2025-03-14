// components/Footer/Footer.tsx
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Mom's Beading & Expression Corner</p>
    </footer>
  );
}
