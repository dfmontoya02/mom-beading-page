import FlashCard from '@components/FlashCard/FlashCard';
import AnimatedSection from '@components/AnimatedSection/AnimatedSection';
import styles from './BeadingVenueSection.module.css';

const beadingProjects = [
  {
    id: '1',
    title: 'Crystal Earrings',
    description: 'Sparkly earrings made with Swarovski crystals and seed beads.',
    imageSrc: '/images/beading1.jpg',
    href: '/beading-details/1',
  },
  {
    id: '2',
    title: 'Statement Necklace',
    description: 'Bold design featuring gemstone beads and intricate patterns.',
    imageSrc: '/images/beading2.jpg',
    href: '/beading-details/2',
  },
  {
    id: '3',
    title: 'Delicate Bracelet',
    description: 'A finely crafted bracelet with intricate beadwork.',
    imageSrc: '/images/beading3.jpg',
    href: '/beading-details/3',
  },
  {
    id: '4',
    title: 'Elegant Brooch',
    description: 'A stunning brooch combining classic and modern designs.',
    imageSrc: '/images/beading4.jpg',
    href: '/beading-details/4',
  },
  {
    id: '5',
    title: 'Vintage Ring',
    description: 'A timeless piece that brings back memories of bygone eras.',
    imageSrc: '/images/beading5.jpg',
    href: '/beading-details/5',
  },
  {
    id: '6',
    title: 'Charming Anklet',
    description: 'A playful anklet perfect for summer days.',
    imageSrc: '/images/beading6.jpg',
    href: '/beading-details/6',
  },
  {
    id: '7',
    title: 'Modern Cuff',
    description: 'A cuff that combines contemporary design with intricate beadwork.',
    imageSrc: '/images/beading7.jpg',
    href: '/beading-details/7',
  },
  {
    id: '8',
    title: 'Beaded Clutch',
    description: 'A stylish accessory that elevates any evening look.',
    imageSrc: '/images/beading8.jpg',
    href: '/beading-details/8',
  },
  {
    id: '9',
    title: 'Layered Necklace',
    description: 'Multiple strands of beads create a layered, eye-catching effect.',
    imageSrc: '/images/beading9.jpg',
    href: '/beading-details/9',
  },
];

export default function BeadingVenueSection() {
  return (
    <AnimatedSection>
      <div className={styles.container}>
        <h1 className={styles.title}>Beading Venue</h1>
        <p className={styles.intro}>
          Welcome to the Beading Venue! Here, I’ll share some of my beading projects, unique designs,
          and patterns, along with techniques to spark your own creativity. Whether you're a seasoned beader or just starting out,
          have fun exploring!
        </p>
        <div className={styles.grid}>
          {beadingProjects.map((project) => (
            <FlashCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
