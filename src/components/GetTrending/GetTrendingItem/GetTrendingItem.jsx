// import PropTypes from 'prop-types';
import css from './GetTrendingItem.module.css';

export const MovieGalleryItem = ({ movie, setSelectedMovie }) => (
  <li className={css.movieGalleryItem}>
    <img
      className={css.movieGalleryItemMovie}
      src={movie.webformatURL}
      alt={movie.id}
      onClick={() => setSelectedMovie(movie.largeImageURL)}
    />
  </li>
);

// MovieGalleryItem.propTypes = {
//   // image: PropTypes.object.isRequired,
//   // setSelectedImage: PropTypes.func.isRequired,
// };
