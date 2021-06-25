import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import s from './AddDishForm.module.css';

class AddDishForm extends Component {
 state = {
    title: '',
    description: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, description } = this.state;

    this.props.onAddDish(title, description);

    this.setState({
      title: '',
      description: '',
    });
  };

  render() {
    const { title, description } = this.state;

    return (
      <div className={s.container}>
        <h2 className={s.title}>Add custom dish</h2>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <input
              className={s.input}
              type="text"
              name="name"
              value={title}
              placeholder="Dish title"
              onChange={this.handleChange}
              required
          />
          <textarea
              className={s.input}
              type="tel"
              name="number"
              value={description}
              placeholder="Dish description..."
              onChange={this.handleChange}
              required
          />
          <Button title="Add custom dish" className={s.button} type="submit" />
        </form>
      </div>
    );
  }
};

export default AddDishForm;