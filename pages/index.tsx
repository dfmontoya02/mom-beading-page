// pages/index.tsx
import Layout from '@components/Layout/Layout';
import AnimatedSection from '@components/AnimatedSection/AnimatedSection';
import SiteTitle from '@components/SiteTitle/SiteTitle';
import BeadingVenueSection from '@components/BeadingVenueSection/BeadingVenueSection';
import FlashCard from '@components/FlashCard/FlashCard';
import DiaryEntryPreview from '@components/DiaryEntryPreview/DiaryEntryPreview';
import StoryPreview from '@components/StoryPreview/StoryPreview';
import FoodRecipePreview from '@components/FoodRecipePreview/FoodRecipePreview';
import FoodRecipeSlider from '@components/FoodRecipeSlider/FoodRecipeSlider';
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
  {
    id: 'calm',
    title: 'Moments of Calm',
    snippet:
      "Sometimes, amidst the chaos, there's a moment of pure peace that anchors us, allowing us to catch our breath and find our center.",
    // No thumbnail; this one will be the non-tilted, centered preview.
  },
];

const foodRecipes = [
  {
    id: 'pasta',
    title: 'Delicious Pasta',
    description:
      "A creamy tomato-based pasta infused with fresh basil and garlic—a perfect blend of comfort and flavor.",
    imageSrc: '/images/pasta.jpg',
  },
  {
    id: 'soup',
    title: 'Hearty Soup',
    description:
      "A classic chicken soup loaded with seasonal vegetables—a bowl of warmth on a chilly day.",
    imageSrc: '/images/soup.jpeg',
  },
  {
    id: 'salmon',
    title: 'Baked Salmon',
    description:
      "A succulent salmon fillet baked to perfection with a hint of lemon and dill, delivering a simple yet flavorful dish.",
    imageSrc: '/images/salmon.jpg',
  },
  {
    id: 'chocolate-cake',
    title: 'Decadent Chocolate Cake',
    description:
      "Indulge in layers of rich chocolate sponge topped with a velvety frosting—perfect for special occasions or a sweet treat anytime.",
    imageSrc: '/images/chocolate-cake.jpg',
  },
  {
    id: 'avocado-toast',
    title: 'Avocado Toast',
    description:
      "A modern brunch favorite—mashed avocado, fresh lime, and a pinch of chili flakes on crisp, rustic bread.",
    imageSrc: '/images/avocado-toast.jpg',
  }
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
      
      {/* Food Recipes Preview Section */}
      <AnimatedSection>
        <h2 className={styles.sectionTitle}>Food Recipes</h2>
        <FoodRecipeSlider recipes={foodRecipes} />
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
