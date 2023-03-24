import Image from "next/image";
import Link from "next/link";

import { StructuredText } from "react-datocms/structured-text";

import { request } from "../lib/datocms";

import {
  RecipeContainer,
  RecipeHeading,
  RecipeSubHeading,
  RecipeStepsAndIngredients,
  RecipeStepsContainer,
  RecipeIngredientsContainer,
  RecipeSteps,
  RecipeStep,
  RecipeIngredients,
  RecipeIngredient,
  RecipeDescription,
} from "./styled";

export default function RecipePage(props) {
  const { postData } = props;

  console.log(postData.content);

  return (
    <RecipeContainer>
      <Link href="/"> Back to recipes </Link>
      <RecipeHeading>{postData.title}</RecipeHeading>
      <span>{postData.author.name}</span>
      <Image
        src={postData.coverImage.url}
        alt={postData.title}
        width={200}
        height={200}
      />

      <RecipeDescription>
        <StructuredText data={postData.content.value} />
      </RecipeDescription>
    </RecipeContainer>
  );
}

const PATHS_QUERY = `
query PathsQuery {
  allArticles {
    slug
  }
}`;

export const getStaticPaths = async () => {
  const slugQuery = await request({
    query: PATHS_QUERY,
  });

  let paths = [];
  slugQuery.allArticles.map((article) => {
    paths.push(`/recipe/${article.slug}`);
  });

  return {
    paths,
    fallback: false,
  };
};

const RECIPE_QUERY = `
query RecipeQuery($slug: String!) {
  article(filter: {slug: {eq: $slug}}) {
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
    publishedDate
    title
  }
}
`;

export const getStaticProps = async ({ params }) => {
  const post = await request({
    query: RECIPE_QUERY,
    variables: { slug: params.slug },
  });

  return {
    props: {
      postData: post.article,
    },
  };
};
