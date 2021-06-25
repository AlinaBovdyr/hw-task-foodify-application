import React from 'react';
import PropTypes from 'prop-types';
import placeholder from './Placeholder.jpg';
import s from './RecipeCard.module.css'

const RecipeCard = ({ title, image, description, category, area }) => {
  return (
    <li className={s.cardBox}>
      <div className={s.cardImgBox}>
        <img className={s.cardImg} src={image} alt={title} />
      </div>
      <div className={s.cardDescr}>
        <div className={s.cardTitle}>
          <h2 className={s.dishTitle}>{title}</h2>
          <span className={s.areaBox}>{area}</span>
        </div>
        <p 
          className={s.hiddenText}
          onClick={({ target }) => target.classList.remove(`${s.hiddenText}`)}
        >
          {description}
        </p>
      </div>
    </li>
  );
};

RecipeCard.defaultProps = {
  imgSrc: placeholder,
  description: '',
};

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default RecipeCard;