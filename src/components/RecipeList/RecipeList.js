import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../RecipeCard/RecipeCard';
import s from './RecipeList.module.css';

const RecipeList = ({ recipeList }) => {
  return (
    <ul className={s.recipeList}>
      {recipeList.map(({ idMeal, strMeal, strInstructions, strMealThumb, strCategory, strArea }) => {
        return (
          <RecipeCard
            key={idMeal}
            title={strMeal}
            description={strInstructions}
            image={strMealThumb}
            category={strCategory}
            area={strArea}
          />
        );
      })}
    </ul>
  );
};

RecipeList.propTypes = {
  recipeList: PropTypes.arrayOf(
    PropTypes.shape({
      idMeal: PropTypes.string.isRequired,
    }),
  ),
};

export default RecipeList;