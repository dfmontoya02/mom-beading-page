// components/NavBar/NavBar.tsx
import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="#food">Food Corner</Link>
      <Link href="#beading">Beading Venue</Link>
      <Link href="#story">Story Alley</Link>
    </nav>
  );
}
