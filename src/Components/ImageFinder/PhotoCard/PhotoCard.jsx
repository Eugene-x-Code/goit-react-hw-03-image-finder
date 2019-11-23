/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './PhotoCard.module.scss';
import FullSizeModal from '../Modal/FullSizeModal';

class PhotoCard extends Component {
  state = { isOpen: false };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const {
      webformatURL,
      likes,
      views,
      comments,
      downloads,
      largeImageURL,
    } = this.props;
    return (
      <div className={css.photoCard}>
        <img src={webformatURL} alt="#" className={css.photoCardImage} />

        <div className={css.stats}>
          <p className={css.statsItem}>
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className={css.statsItem}>
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className={css.statsItem}>
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className={css.statsItem}>
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>

        <button
          type="button"
          className={css.fullscreenButton}
          onClick={this.openModal}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>

        {isOpen && (
          <FullSizeModal
            close={this.closeModal}
            visible={isOpen}
            fullImage={largeImageURL}
          />
        )}
      </div>
    );
  }
}

PhotoCard.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
};

export default PhotoCard;
