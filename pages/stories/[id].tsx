import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import Layout from '@components/Layout/Layout';
import styles from '../../styles/StoryDetails.module.css';

// Define the shape of a story
interface Story {
  id: string;
  title: string;
  content: string;
}

// Define the props for the page component
interface StoryDetailsProps {
  story: Story | null;
}

// Define the expected URL parameters
interface Params extends ParsedUrlQuery {
  id: string;
}

// Our story data – now with three stories: joy, victories, and calm
const storiesData: Story[] = [
  {
    id: 'joy',
    title: 'A Bundle of Joy',
    content: `In the midst of life's challenges, I happened upon this little bundle of joy and found myself saying yes. Looking back, I’m beyond grateful for that decision. This loyal companion, with his boundless energy and heart full of love, brought so much warmth and comfort to everyone around him. He quickly became a source of unconditional affection, a reminder of what it means to truly love. To this sweet soul, you will forever hold a piece of my heart. ❤️

If you're considering opening your heart and home to one of these wagging wonders, don’t hesitate—embrace the joy!`,
  },
  {
    id: 'victories',
    title: 'Victories',
    content: `This summer, we celebrated a milestone that filled our hearts with pride—my son's college graduation. It was a moment of triumph, not just for him, but for our entire family. We gathered together, some traveling from afar, to honor his hard work and achievement. The love and support that surrounded us made the day even more unforgettable; a beautiful reminder of the bond we share and the journey we've all been on together.

The voice of wisdom:
Exhaustion is a sign of accomplishment—it's the mark of pushing limits and achieving something meaningful. It’s the feeling of progress in every step.`,
  },
  {
    id: 'calm',
    title: 'Moments of Calm',
    content: `In a world that moves too fast, there are rare moments of tranquility that remind us to slow down and breathe. On an early morning walk, the gentle rustle of leaves and the soft glow of dawn create a peaceful backdrop where worries fade away. I found myself sitting quietly on a park bench, watching the world awaken, and for a brief while, everything felt balanced and serene.

These moments of calm anchor our souls, offering clarity and the strength to face the day ahead. They remind us that amidst the chaos, peace is always within reach if we pause to embrace it.`,
  },
];

export default function StoryDetails({ story }: StoryDetailsProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;
  if (!story) return <div>Story not found</div>;

  // Set a hero background image based on the story ID.
  // Ensure these image paths exist in your public/images folder.
  let heroBackground = '/images/default-story-bg.jpg';
  if (story.id === 'joy') {
    heroBackground = '/images/Levi1.jpg';
  } else if (story.id === 'victories') {
    heroBackground = '/images/graduation.jpg';
  } else if (story.id === 'calm') {
    heroBackground = '/images/calm.jpg';
  }

  return (
    <Layout>
      {/* Hero Section */}
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>{story.title}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentContainer}>
        <div className={styles.card}>
          {story.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>

        {/* Optional: For the "joy" story, include a scrapbook-style gallery */}
        {story.id === 'joy' && (
          <div className={styles.gallery}>
            <img src="/images/Levi1.jpg" alt="Levi 1" className={styles.galleryImage} />
            <img src="/images/Levi2.jpg" alt="Levi 2" className={styles.galleryImage} />
            <img src="/images/Levi3.jpg" alt="Levi 3" className={styles.galleryImage} />
          </div>
        )}

        <button className={styles.backButton} onClick={() => router.back()}>
          &larr; Back to Stories
        </button>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = storiesData.map((story) => ({
    params: { id: story.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<StoryDetailsProps, Params> = async ({ params }) => {
  const { id } = params as Params;
  const story = storiesData.find((s) => s.id === id) || null;
  return { props: { story } };
};
