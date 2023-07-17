import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'components/fetchData';
// import { BackLink } from '../components/BackLink';

// import { useRouteMatch, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();
  // const movie = getMovieById(id);
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/';
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const movieDetails = async () => {
      setIsLoading(true);
      try {
        const hits = await fetchMovieDetails();
        setTrendingMovies(hits);
        console.log(trendingMovies);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
        setTrendingMovies([]);
        setIsLoading(false);
      }
    };

    movieDetails();
  }, []);

  return (
    <main>
      {/* <BackLink to={backLinkHref}>Go Back</BackLink> */}
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>
          Movie
          {/* - {movie.name} - */}
          {id}
        </h2>
        <p>User Score</p>
        <h3>Overview</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
        <h4>Genres</h4>
        <p>Details</p>
      </div>
    </main>
  );
};

export default MovieDetails;
