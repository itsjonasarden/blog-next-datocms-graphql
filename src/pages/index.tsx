import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { getAllRecipes } from "./lib/recipes";

import {
  BlogContainer,
  BlogHeading,
  RecipeSection,
  RecipeContainer,
  RecipeHeading,
  RecipeDescription,
} from "./styled";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

type TRecipe = {
  id: number;
  title: string;
  publishDate: string;
  author: string;
  coverImage: string;
  excerpt: string;
  content: string;
  slug: string;
};

export default function Home() {
  const recipes = getAllRecipes();

  return (
    <>
      <Head>
        <title>Next.js + DatoCMS + GraphQL Blog</title>
        <meta name="description" content="Next.js + DatoCMS + GraphQL Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogContainer className={inter.className}>
        <BlogHeading>Cooking Recipes</BlogHeading>
        <RecipeSection>
          {recipes.map((recipe) => (
            <RecipePreview key={recipe.id} data={recipe} />
          ))}
        </RecipeSection>
      </BlogContainer>
    </>
  );
}

const RecipePreview = ({ data }: { data: TRecipe }) => {
  return (
    <RecipeContainer>
      <Link href={`/recipe/${data.slug}`}>
        <RecipeHeading>{data.title}</RecipeHeading>
      </Link>
      <Image src={data.coverImage} alt={data.title} width={200} height={200} />
      <RecipeDescription>{data.excerpt}</RecipeDescription>
    </RecipeContainer>
  );
};
