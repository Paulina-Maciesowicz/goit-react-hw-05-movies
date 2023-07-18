import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'components/fetchData';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
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
        <p>
          {movieDetails.overview}
          {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum? */}
        </p>
        {/* <h4>Genres {movieDetails.genres.name}</h4> */}
        {/* <p>Details {movieDetails.vote_average}</p> */}
      </div>
      <div>
        {<Cast />} {<Reviews />}
      </div>
    </main>
  );
};

export default MovieDetails;
