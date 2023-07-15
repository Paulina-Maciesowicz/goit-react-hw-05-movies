import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { fetchData } from 'components/fetchData';
import { Loader } from 'components/Loader/Loader';

// import css from './GetTrending.module.css';

export const MovieGallery = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchTrendingMovies = async () => {
      setIsLoading(true);
      try {
        const hits = await fetchData();
        setTrendingMovies(hits);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setTrendingMovies([]);
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies Today</h1>
      {isLoading && <Loader />}
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/goit-react-hw-05-movies/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  // <ul className={css.movieGallery}>
  //   {trendingMovies.map(movie => (
  //     <GetTrendingItem
  //       key={id()}
  //       movie={movie}
  //       setSelectedMovie={setSelectedMovie}
  //     />
  //   ))}
  // </ul>
  // );

  // MovieGallery.propTypes = {
  //   // movies: PropTypes.array.isRequired,
  //   // id: PropTypes.func.isRequired,
  //   // setSelectedMovie: PropTypes.func.isRequired,
  // };
};
