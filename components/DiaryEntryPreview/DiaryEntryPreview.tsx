import Link from 'next/link';
import styles from './DiaryEntryPreview.module.css';

type DiaryEntryPreviewProps = {
  id: string;
  title: string;
  snippet: string;
};

export default function DiaryEntryPreview({ id, title, snippet }: DiaryEntryPreviewProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.snippet}>{snippet}</p>
      <Link href={`/stories/${id}`} className={styles.readMore}>
        Read More
      </Link>
    </div>
  );
}
