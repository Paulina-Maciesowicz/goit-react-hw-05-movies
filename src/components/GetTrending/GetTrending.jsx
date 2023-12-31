import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { fetchData } from 'services/fetchData';
import { Loader } from 'components/Loader/Loader';

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
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
