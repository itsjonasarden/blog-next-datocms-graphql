const recipes = [
  {
    id: 1,
    title: "Chorizo & mozzarella gnocchi bake",
    publishDate: "2022-09-01",
    author: "Jonas Arden",
    coverImage: "https://picsum.photos/200",
    excerpt:
      "This is a simple and delicious recipe for a chorizo and mozzarella gnocchi bake. It’s a great midweek meal that the whole family will love.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    slug: "chorizo-mozzarella-gnocchi-bake",
  },
  {
    id: 2,
    title: "Spinach and Feta Stuffed Chicken Breast",
    publishDate: "2022-11-02",
    author: "Sarah Miller",
    coverImage: "https://picsum.photos/201",
    excerpt:
      "This spinach and feta stuffed chicken breast is an easy and delicious dinner recipe that's perfect for a weeknight meal.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    slug: "spinach-feta-stuffed-chicken-breast",
  },
  {
    id: 3,
    title: "Creamy Tuscan Garlic Chicken",
    publishDate: "2022-11-05",
    author: "Lucas Lee",
    coverImage: "https://picsum.photos/202",
    excerpt:
      "This creamy Tuscan garlic chicken is a quick and easy dinner recipe that's perfect for busy weeknights.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    slug: "creamy-tuscan-garlic-chicken",
  },
  {
    id: 4,
    title: "Easy Beef Stroganoff",
    publishDate: "2022-11-09",
    author: "Julia Michaels",
    coverImage: "https://picsum.photos/203",
    excerpt:
      "This easy beef stroganoff is a classic comfort food recipe that's perfect for cold winter nights.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    slug: "easy-beef-stroganoff",
  },
  {
    id: 5,
    title: "Vegetarian Quesadillas",
    publishDate: "2022-11-12",
    author: "Ava Nguyen",
    coverImage: "https://picsum.photos/204",
    excerpt:
      "These vegetarian quesadillas are a quick and easy lunch or dinner recipe that's packed with flavor and protein.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    slug: "vegetarian-quesadillas",
  },
];

export function getAllRecipes() {
  return recipes;
}

export function getAllSlugs() {
  let slugs = [];
  getAllRecipes().map((recipe) => {
    slugs.push(`/recipe/${recipe.slug}`);
  });
  return slugs;
}

export function getRecipeData(slug) {
  let recipe = null;
  getAllRecipes().map((item) => {
    if (item.slug === slug) {
      recipe = item;
      return;
    }
  });
  return recipe;
}
