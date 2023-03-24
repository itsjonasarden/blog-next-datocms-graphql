import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

import { request } from "../lib/datocms";

import {
  BlogContainer,
  BlogHeading,
  RecipeSection,
  RecipeContainer,
  RecipeHeading,
  RecipeDescription,
} from "../styles/main";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

type TRecipe = {
  author: {
    name: string;
  };
  content: {
    value: string;
  };
  coverImage: {
    url: string;
  };
  excerpt: string;
  id: string;
  publishedDate: string;
  slug: string;
  title: string;
};

type TProps = {
  data: {
    allArticles: TRecipe[];
  };
};

const HOMEPAGE_QUERY = `
query MyQuery {
  allArticles {
    author {
      name
    }
    content {
      value
    }
    coverImage {
      url
    }
    excerpt
    id
    publishedDate
    slug
    title
  }
}
`;

export async function getStaticProps() {
  //@ts-ignore
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

export default function Home(props: TProps) {
  const { data } = props;
  const recipesArr = data.allArticles;

  console.log(props);

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
          {recipesArr.map((recipe) => (
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
      <Image
        src={data.coverImage.url}
        alt={data.title}
        width={200}
        height={200}
      />
      <RecipeDescription>{data.excerpt}</RecipeDescription>
    </RecipeContainer>
  );
};
