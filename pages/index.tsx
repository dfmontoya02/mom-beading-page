// pages/index.tsx
import Layout from '@components/Layout/Layout';
import AnimatedSection from '@components/AnimatedSection/AnimatedSection';
import SiteTitle from '@components/SiteTitle/SiteTitle';
import BeadingVenueSection from '@components/BeadingVenueSection/BeadingVenueSection';
import FlashCard from '@components/FlashCard/FlashCard';
import DiaryEntryPreview from '@components/DiaryEntryPreview/DiaryEntryPreview';
import StoryPreview from '@components/StoryPreview/StoryPreview';
import styles from '../styles/Home.module.css';

const stories = [
  {
    id: 'joy',
    title: 'A Bundle of Joy',
    snippet:
      "In the midst of life's challenges, I happened upon this little bundle of joy and found myself saying yes. Looking back, I’m beyond grateful...",
    // thumbnail: '/images/Levi1.jpg', // Ensure this path is correct (public/images/Levi1.jpg)
  },
  {
    id: 'victories',
    title: 'Victories',
    snippet:
      "This summer, we celebrated a milestone that filled our hearts with pride—my son's college graduation...",
  },
];

export default function Home() {
  return (
    <Layout>
      <SiteTitle />

      {/* Hero / Welcome Section */}
      <AnimatedSection>
        <div className={styles.welcomeContainer}>
          <h1>Welcome to my little corner of expression!</h1>
          <p>
            Here, you'll discover a collection of my beading projects, fun and delicious recipes, and a few heartwarming stories that I've gathered along the way. This space is all about sharing the things that bring joy to life—whether it’s the spark of a new bead design, a tasty dish to try, or a simple story to warm the soul.
          </p>
          <p>
            I invite you to explore and get inspired. I hope you find a sense of resonance through what I've shared. Thanks for stopping by—let's celebrate the beauty of expression together!
          </p>
        </div>
      </AnimatedSection>
      
      {/* Beading Venue Section reused from the component */}
      <BeadingVenueSection />
      
      {/* Food Corner Section */}
      <AnimatedSection>
        <a id="food" />
        <h2>Food Corner</h2>
        <p style={{ maxWidth: '700px', margin: '1rem auto' }}>
          Join me at the food corner where cooking is a venture of creativity! Let’s delight our taste buds with flavors and experiences that turn simple ingredients into mouthwatering dishes.
        </p>
        <FlashCard
          title="Delicious Pasta"
          description="Try out this creamy tomato-based pasta that’s super easy to make!"
          imageSrc="/images/pasta.jpg"
          href="/food-details/1"
        />
        <FlashCard
          title="Hearty Soup"
          description="Warm up with a classic chicken soup loaded with veggies."
          imageSrc="/images/soup.jpg"
          href="/food-details/2"
        />
      </AnimatedSection>
      
      {/* Stories Preview Section */}
      <AnimatedSection>
        <h2 className={styles.sectionTitle}>Stories</h2>
        <div className={styles.diaryGrid}>
  {stories.map((story) => (
    <DiaryEntryPreview
      key={story.id}
      id={story.id}
      title={story.title}
      snippet={story.snippet}
      thumbnail={story.thumbnail}  // This will render the image if available
    />
  ))}
</div>
      </AnimatedSection>
    </Layout>
  );
}
