import styled from "styled-components";

const BlogContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 1240px;
  margin: 0 auto;
`;

const BlogHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const RecipeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RecipeDescription = styled.p`
  margin-bottom: 1rem;
`;
const RecipeContainer = styled.article``;

const RecipeHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export {
  BlogContainer,
  BlogHeading,
  RecipeSection,
  RecipeDescription,
  RecipeContainer,
  RecipeHeading,
};
