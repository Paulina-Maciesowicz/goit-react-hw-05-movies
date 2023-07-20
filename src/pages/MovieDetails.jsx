import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect, Suspense } from 'react';
import { fetchMovieDetails } from 'services/fetchData';
import { Loader } from 'components/Loader/Loader';
import { BackLink } from 'components/BackLink/BackLink';

const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [movieDetails, setMovieDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const movieDetails = async () => {
      setIsLoading(true);
      try {
        const hits = await fetchMovieDetails(movieId);
        setMovieDetails(hits);
        console.log(hits.id);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setMovieDetails([]);
        setIsLoading(false);
      }
    };

    movieDetails();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main>
      <BackLink to={backLinkHref}>Go Back</BackLink>
      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
            : `https://poster.keepcalmandposters.com/3253015.jpg`
        }
        alt={movieDetails.title}
        width="500"
      />
      <div>
        <h2>
          Movie - {movieDetails.original_title} {movieDetails.release_date}
        </h2>
        <p>User Score {movieDetails.vote_average}</p>
        <h3>Overview </h3>
        <p>{movieDetails.overview}</p>
      </div>
      <div>
        <Link to={`/movies/${movieId}/cast`} state={{ from: backLinkHref }}>
          <p>Cast</p>
        </Link>
        <Link to={`/movies/${movieId}/reviews`} state={{ from: backLinkHref }}>
          <p>Reviews</p>
        </Link>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MovieDetails;
