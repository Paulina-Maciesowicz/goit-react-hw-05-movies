import { GetTrendingItem } from './GetTrendingItem/GetTrendingItem';
import PropTypes from 'prop-types';
import css from './GetTrending.module.css';

export const MovieGallery = ({ movies, id, setSelectedMovie }) => (
  <ul className={css.movieGallery}>
    {movies.map(movie => (
      <GetTrendingItem
        key={id()}
        movie={movie}
        setSelectedMovie={setSelectedMovie}
      />
    ))}
  </ul>
);

MovieGallery.propTypes = {
  // movies: PropTypes.array.isRequired,
  // id: PropTypes.func.isRequired,
  // setSelectedMovie: PropTypes.func.isRequired,
};
