import React, { Component } from 'react';
import getRandomRecipe from '../services/fetchRandomRecipe';
import Container from '../components/Container/Container';
import RecipeList from '../components/RecipeList/RecipeList';
import ButtonList from '../components/ButtonList/ButtonList';

export default class HomePage extends Component {
  state = {
    meals: [],
  };

  componentDidMount() {
    getRandomRecipe().then(data => this.setState({ meals: data.meals }));
  }

  render() {
    const { meals } = this.state;

    return (
      <Container>
        <RecipeList recipeList={meals} />
        <ButtonList />
      </Container>
    );
  }
}