import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ title, className, ...restProps }) => {
  const classList = [className, s.button].join(' ');

  return (
    <button className={classList} {...restProps}>
      {title}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  title: 'Button'
};

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Button;