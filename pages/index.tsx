// pages/index.tsx
// Correct usage if your alias is "@components/*": ["components/*"]
import AnimatedSection from '@components/AnimatedSection/AnimatedSection';
import FlashCard from '@components/FlashCard/FlashCard';
import Layout from '@components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero / Introduction - also leads into Beading */}
      <AnimatedSection>
        <h1>Welcome to My Beading Venue First!</h1>
        <p style={{ maxWidth: '700px', margin: '1rem auto' }}>
          This space is all about sharing the things that bring joy to life—starting 
          with my beading projects. I love experimenting with patterns, colors, and 
          techniques, and I hope these creations inspire you!
        </p>
      </AnimatedSection>

      {/* Beading Venue Section */}
      <AnimatedSection>
        <a id="beading" />
        <h2>Beading Venue</h2>
        <p style={{ maxWidth: '700px', margin: '1rem auto' }}>
          Welcome to the Beading Venue! Here, I’ll share some of my beading projects, 
          unique designs, and patterns, along with techniques to spark your own creativity. 
          Whether you're a seasoned beader or just starting out, have fun exploring!
        </p>

        <FlashCard
          title="Crystal Earrings"
          content="Sparkly earrings made with Swarovski crystals and seed beads."
          imageSrc="/images/beading1.jpg"
        />
        <FlashCard
          title="Statement Necklace"
          content="Bold design featuring gemstone beads and intricate patterns."
          imageSrc="/images/beading2.jpg"
        />
      </AnimatedSection>

      {/* Food Corner Section */}
      <AnimatedSection>
        <a id="food" />
        <h2>Food Corner</h2>
        <p style={{ maxWidth: '700px', margin: '1rem auto' }}>
          Join me at the food corner where cooking is a venture of creativity! Let’s delight 
          our taste buds with flavors and experiences that turn simple ingredients into 
          mouthwatering dishes.
        </p>

        <FlashCard
          title="Delicious Pasta"
          content="Try out this creamy tomato-based pasta that’s super easy to make!"
          imageSrc="/images/pasta.jpg"
        />
        <FlashCard
          title="Hearty Soup"
          content="Warm up with a classic chicken soup loaded with veggies."
          imageSrc="/images/soup.jpg"
        />
      </AnimatedSection>

      {/* Story Alley Section */}
      <AnimatedSection>
        <a id="story" />
        <h2>Story Alley</h2>
        <p style={{ maxWidth: '700px', margin: '1rem auto' }}>
          Step into the Story Alley—a collection of brief tales, personal experiences, and 
          reflections that have shaped my journey. These are snapshots of moments that 
          bring comfort, spark curiosity, or offer a fresh perspective.
        </p>

        <FlashCard
          title="A Rainy Afternoon"
          content="One afternoon, the rain poured like never before, turning out to be the best day..."
          imageSrc="/images/rain.jpg"
        />
        <FlashCard
          title="Finding Home"
          content="A short reflection on what ‘home’ means, beyond walls and a roof."
          imageSrc="/images/home.jpg"
        />
      </AnimatedSection>
    </Layout>
  );
}