import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import Layout from '@components/Layout/Layout';
import styles from '../../styles/FoodDetails.module.css';

// Define the shape of a food recipe
interface FoodRecipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string;
  imageSrc: string;
}

// Define the props for the page component
interface FoodRecipeDetailsProps {
  recipe: FoodRecipe | null;
}

// Define the expected URL parameters
interface Params extends ParsedUrlQuery {
  id: string;
}

// Our food recipe data
const foodRecipesData: FoodRecipe[] = [
  {
    id: 'pasta',
    title: 'Delicious Pasta',
    description:
      'A creamy tomato-based pasta infused with fresh basil and garlic—a perfect blend of comfort and flavor.',
    ingredients: [
      '200g pasta',
      '2 tomatoes, diced',
      '2 cloves garlic, minced',
      'Fresh basil leaves',
      'Salt and pepper to taste',
      'Olive oil',
    ],
    instructions: `1. Cook the pasta until al dente.
2. In a pan, heat olive oil and sauté garlic until fragrant.
3. Add tomatoes and cook until softened.
4. Mix in the pasta and add basil leaves.
5. Season with salt and pepper.
6. Serve warm.`,
    imageSrc: '/images/pasta.jpg',
  },
  {
    id: 'soup',
    title: 'Hearty Soup',
    description:
      'A classic chicken soup loaded with seasonal vegetables—a bowl of warmth on a chilly day.',
    ingredients: [
      '1 whole chicken or chicken parts',
      'Carrots, celery, and onions',
      'Garlic',
      'Herbs (thyme, bay leaves)',
      'Salt and pepper',
      'Water or chicken broth',
    ],
    instructions: `1. Place the chicken in a large pot and cover with water or broth.
2. Bring to a boil and skim off foam.
3. Add chopped vegetables and herbs.
4. Simmer for 1-2 hours until the chicken is tender.
5. Season with salt and pepper.
6. Serve hot.`,
    imageSrc: '/images/soup.jpeg',
  },
  {
    id: 'salmon',
    title: 'Baked Salmon',
    description:
      "A succulent salmon fillet baked to perfection with a hint of lemon and dill, delivering a simple yet flavorful dish.",
    ingredients: [
      '1 salmon fillet',
      'Lemon juice',
      'Dill',
      'Salt and pepper',
      'Olive oil'
    ],
    instructions: `1. Preheat oven to 200°C (400°F).
2. Drizzle salmon with olive oil and lemon juice.
3. Season with dill, salt, and pepper.
4. Bake for 12-15 minutes or until salmon flakes easily.
5. Serve warm with your favorite sides.`,
    imageSrc: '/images/salmon.jpg',
  },
  {
    id: 'salmon',
    title: 'Baked Salmon',
    description:
      "A succulent salmon fillet baked to perfection with a hint of lemon and dill, delivering a simple yet flavorful dish.",
    ingredients: [
      '1 salmon fillet',
      'Lemon juice',
      'Dill',
      'Salt and pepper',
      'Olive oil',
    ],
    instructions: `1. Preheat oven to 200°C (400°F).
2. Drizzle salmon with olive oil and lemon juice.
3. Season with dill, salt, and pepper.
4. Bake for 12-15 minutes or until salmon flakes easily.
5. Serve warm with your favorite sides.`,
    imageSrc: '/images/salmon.jpg',
  },
  {
    id: 'chocolate-cake',
    title: 'Decadent Chocolate Cake',
    description:
      "Indulge in layers of rich chocolate sponge topped with velvety frosting—perfect for celebrations or as a sweet treat.",
    ingredients: [
      '1 3/4 cups all-purpose flour',
      '3/4 cup cocoa powder',
      '2 cups sugar',
      '1 1/2 tsp baking powder',
      '1 1/2 tsp baking soda',
      '1 tsp salt',
      '2 eggs',
      '1 cup milk',
      '1/2 cup vegetable oil',
      '2 tsp vanilla extract',
      '1 cup boiling water',
    ],
    instructions: `1. Preheat oven to 350°F (175°C). Grease and flour two 9-inch round pans.
2. In a large bowl, combine flour, cocoa, sugar, baking powder, baking soda, and salt.
3. Add eggs, milk, oil, and vanilla; mix until smooth.
4. Stir in boiling water (the batter will be thin). Pour into prepared pans.
5. Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean.
6. Cool completely before frosting.`,
    imageSrc: '/images/chocolate-cake.jpg',
  },
  {
    id: 'avocado-toast',
    title: 'Avocado Toast',
    description:
      "A modern brunch favorite—mashed avocado on toasted rustic bread, topped with a squeeze of lime and a sprinkle of chili flakes.",
    ingredients: [
      '2 slices of rustic bread',
      '1 ripe avocado',
      'Salt and pepper to taste',
      'Lime juice',
      'Chili flakes',
    ],
    instructions: `1. Toast the bread until golden and crisp.
2. Mash the avocado in a bowl with salt, pepper, and lime juice.
3. Spread the mashed avocado on the toast.
4. Sprinkle with chili flakes.
5. Enjoy immediately.`,
    imageSrc: '/images/avocado-toast.jpg',
  },
];

export default function FoodRecipeDetails({ recipe }: FoodRecipeDetailsProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${recipe.imageSrc})` }}
      >
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>{recipe.title}</h1>
          <p className={styles.heroDescription}>{recipe.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.detailsSection}>
        <div className={styles.infoCard}>
          <h2>Ingredients</h2>
          <ul className={styles.ingredients}>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2>Instructions</h2>
          <pre className={styles.instructions}>{recipe.instructions}</pre>

          <button className={styles.backButton} onClick={() => router.back()}>
            &larr; Back to Food Recipes
          </button>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = foodRecipesData.map((recipe) => ({
    params: { id: recipe.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<FoodRecipeDetailsProps, Params> = async ({
  params,
}) => {
  const { id } = params as Params;
  const recipe = foodRecipesData.find((r) => r.id === id) || null;
  return { props: { recipe } };
};
