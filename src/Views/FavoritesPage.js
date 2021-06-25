import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Container from '../components/Container/Container';
import RecipeList from '../components/RecipeList/RecipeList';
import Button from '../components/UI/Button/Button';
import Modal from '../components/UI/Modal/Modal';
import AddDishForm from '../components/AddDishForm/AddDishForm';
import s from './Pages.module.css';
import './Animation.css';

class FavoritePage extends Component {
  state = {
    favorites: [],
    showModal: false,
  };
  
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  
  handleAddBtnClick = e => {
    e.preventDefault();
  }
  
  onAddDish = () => {
    this.toggleModal()
  }

  render() {
    const { favorites, showModal } = this.state;

    return (
      <Container>
        <Button 
          type="button" 
          title="Add custom dish" 
          className={s.addBtn}
          onClick={this.toggleModal}
        />
        <RecipeList recipeList={favorites} />
        <CSSTransition
          in={showModal}
          unmountOnExit
          classNames="modal"
          timeout={250}
        >
          <Modal onClose={this.toggleModal}>
            <AddDishForm onSave={this.onAddDish} />
          </Modal>
        </CSSTransition>
        
      </Container>
    );
  }
};

export default FavoritePage;