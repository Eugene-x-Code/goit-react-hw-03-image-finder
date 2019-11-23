import React from 'react';
import PropTypes from 'prop-types';
import css from './LoadBtn.module.scss';

const LoadBtn = ({ onLoadClick }) => (
  <button type="button" className={css.button} onClick={onLoadClick}>
    Load More
  </button>
);

LoadBtn.propTypes = {
  onLoadClick: PropTypes.func.isRequired,
};

export default LoadBtn;
