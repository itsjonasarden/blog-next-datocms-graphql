import Image from "next/image";
import Link from "next/link";
import { getAllSlugs, getRecipeData } from "../lib/recipes";
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
  return (
    <RecipeContainer>
      <Link href="/"> Back to recipes </Link>
      <RecipeHeading>{postData.title}</RecipeHeading>
      <Image
        src={postData.coverImage}
        alt={postData.title}
        width={200}
        height={200}
      />
      <RecipeDescription>{postData.description}</RecipeDescription>
      <RecipeStepsAndIngredients>
        <RecipeIngredientsContainer>
          <RecipeSubHeading>Ingredients</RecipeSubHeading>
          <RecipeIngredients>
            <RecipeIngredient>1 tbsp olive oil</RecipeIngredient>
            <RecipeIngredient>1 onion, finely chopped</RecipeIngredient>
            <RecipeIngredient>2 garlic cloves, crushed</RecipeIngredient>
          </RecipeIngredients>
        </RecipeIngredientsContainer>
        <RecipeStepsContainer>
          <RecipeSubHeading>Steps</RecipeSubHeading>
          <RecipeSteps>
            <RecipeStep>
              Heat the oil in a medium pan over a medium heat. Fry the onion and
              garlic for 8-10 mins until soft. Add the chorizo and fry for 5
              mins more. Tip in the tomatoes and sugar, and season. Bring to a
              simmer, then add the gnocchi and cook for 8 mins, stirring often,
              until soft. Heat the grill to high.
            </RecipeStep>
            <RecipeStep>
              Stir ¾ of the mozzarella and most of the basil through the
              gnocchi. Divide the mixture between six ovenproof ramekins, or put
              in one baking dish. Top with the remaining mozzarella, then grill
              for 3 mins, or until the cheese is melted and golden. Season,
              scatter over the remaining basil and serve with green salad.
            </RecipeStep>
          </RecipeSteps>
        </RecipeStepsContainer>
      </RecipeStepsAndIngredients>
    </RecipeContainer>
  );
}

export const getStaticPaths = () => {
  const paths = getAllSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const postData = getRecipeData(params.slug);
  return {
    props: {
      postData,
    },
  };
};
