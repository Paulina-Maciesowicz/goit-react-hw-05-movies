import { Link, Outlet, useParams } from 'react-router-dom';
import React, { useState, useEffect, Suspense } from 'react';
// import {  useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'components/fetchData';
// import  Cast  from 'components/Cast/Cast';
// import  Reviews   from 'components/Reviews/Reviews';
import { Loader } from 'components/Loader/Loader';
// import { BackLink } from '../components/BackLink';

export const MovieDetails = () => {
  const { movieId } = useParams();

  console.log(useParams());
  // const movie = getMovieById(id);
  // const backLinkHref = location.state?.from ?? '/';
  const [movieDetails, setMovieDetails] = useState([]);
  // const location = useLocation();
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
      {/* <BackLink to={backLinkHref}>Go Back</BackLink> */}
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
        {/* <h4>Genres {movieDetails.genres.name}</h4> */}
        {/* <p>Details {movieDetails.vote_average}</p> */}
      </div>
      <div>
        <Link
          to={`/goit-react-hw-05-movies/movies/${movieId}/cast`}
          // state={{ from: location }}
        >
          <p>Cast</p>
        </Link>
        <Link
          to={`/goit-react-hw-05-movies/movies/${movieId}/reviews`}
          // state={{ from: location }}
        >
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
