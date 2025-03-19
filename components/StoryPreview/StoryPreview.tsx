import Link from 'next/link';
import styles from './StoryPreview.module.css';

type StoryPreviewProps = {
  id: string;
  title: string;
  snippet: string;
  thumbnail?: string;
  className?: string;
};

export default function StoryPreview({
  id,
  title,
  snippet,
  thumbnail,
  className = '',
}: StoryPreviewProps) {
  return (
    <div className={`${styles.card} ${className}`}>
      {thumbnail && (
        <img
          src={thumbnail}
          alt={`${title} Thumbnail`}
          className={styles.thumbnail}
        />
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.snippet}>{snippet}</p>
      <Link href={`/stories/${id}`} className={styles.readMore}>
        Read More
      </Link>
    </div>
  );
}
