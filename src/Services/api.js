import axios from 'axios';

const API_KEY = '4326956-16126e11086c4c1737aa4aad3';

// eslint-disable-next-line import/prefer-default-export
export const fetchGallery = (query = '', pageCount = 12) => {
  return axios.get(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=1&per_page=${pageCount}&key=${API_KEY}`,
  );
};
