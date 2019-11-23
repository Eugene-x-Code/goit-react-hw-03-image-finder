import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.scss';

const SearchForm = ({ onSearch }) => (
  <form className={css.searchForm} onSubmit={onSearch}>
    <input type="text" autoComplete="off" placeholder="Search images..." />
    <button type="submit" className={css.button}>
      Search
    </button>
  </form>
);

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
