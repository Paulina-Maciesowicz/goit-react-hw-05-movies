import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=474a901dde83d12b9be138b9ccc9ba9f&language=en-US`
        );
        const data = await response.json();
        setCast(data.cast);
        setIsLoading(false);
      } catch (error) {
        setErrorMessage('Failed to fetch cast');
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {isLoading && <Loader />}
      {errorMessage && <p>{errorMessage}</p>}
      {cast.length === 0 ? (
        <p>We don't have cast informations for this movie.</p>
      ) : (
        cast.map(actor => (
          <div key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : 'https://poster.keepcalmandposters.com/3253015.jpg'
              }
              alt={`${actor.name} profile`}
              width="200"
            />
            <p>
              {actor.name ? actor.name : ''} as{' '}
              {actor.character ? actor.character : 'unknown'}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cast;
