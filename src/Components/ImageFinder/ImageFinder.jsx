import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import Gallery from './Gallery/Gallery';
import css from './ImageFinder.module.scss';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import * as galleryAPI from '../../Services/api';
import LoadBtn from './LoadBtn/LoadBtn';
import Loader from './Loader/Loader';

const COUNT_CARDS = 12;

class ImageFinder extends Component {
  state = {
    gallery: [],
    isLoading: false,
    error: null,
    query: '',
    pages: 12,
  };

  componentDidMount() {
    this.getGallery();
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, pages } = this.state;
    if (prevState.query !== query) {
      this.getGallery();
    }
    if (prevState.pages !== pages && 12) {
      this.getGallery(true);
    }
  }

  getGallery = (pagePlus = false) => {
    this.setState({ isLoading: true });

    galleryAPI
      .fetchGallery(this.state.query, this.state.pages)
      .then(({ data }) => {
        this.setState({ gallery: data.hits });
        if (pagePlus) {
          window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth',
          });
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSearch = e => {
    e.preventDefault();
    this.setState({ pages: COUNT_CARDS });
    this.setState({ query: e.target.firstChild.value });
  };

  handleOnLoadClick = () => {
    this.setState(prevState => ({
      pages: prevState.pages + COUNT_CARDS,
    }));
  };

  render() {
    const { gallery, isLoading, error } = this.state;
    return (
      <section className={css.app}>
        <SearchForm onSearch={this.handleSearch} />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {gallery.length > 0 ? (
          <>
            <Gallery gallery={gallery} />
            <LoadBtn onLoadClick={this.handleOnLoadClick} />
          </>
        ) : (
          <p>Nothing found !!</p>
        )}
      </section>
    );
  }
}

export default ImageFinder;
