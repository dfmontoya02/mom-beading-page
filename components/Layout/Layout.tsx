// components/Layout/Layout.tsx
import { ReactNode } from 'react';
import NavBar from '../NavBar/NavBar';
import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
