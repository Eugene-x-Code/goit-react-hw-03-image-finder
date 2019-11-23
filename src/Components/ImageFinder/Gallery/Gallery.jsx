/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import css from './Gallery.module.scss';
import PhotoCard from '../PhotoCard/PhotoCard';

const Gallery = ({ gallery }) => (
  <ul className={css.gallery}>
    {gallery.map(galleryItem => (
      <PhotoCard key={galleryItem.id} {...galleryItem} />
    ))}
  </ul>
);

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
