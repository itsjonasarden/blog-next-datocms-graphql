import styled from "styled-components";

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1240px;
  margin: 0 auto;
`;

const RecipeDescription = styled.p`
  margin-top: 1rem;

  ol > li {
    margin-bottom: 1rem;
  }
`;

const RecipeHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const RecipeSubHeading = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const RecipeStepsAndIngredients = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-areas: "steps ingredients";
  gap: 4rem;
`;

const RecipeStepsContainer = styled.div`
  grid-area: steps;
`;

const RecipeIngredientsContainer = styled.div`
  grid-area: ingredients;
`;

const RecipeSteps = styled.ol``;

const RecipeStep = styled.li`
  margin-bottom: 1rem;
`;

const RecipeIngredients = styled.ul``;

const RecipeIngredient = styled.li``;

export {
  RecipeDescription,
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
};
