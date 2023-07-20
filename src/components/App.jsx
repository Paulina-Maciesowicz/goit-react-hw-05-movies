import { Route, Routes } from 'react-router-dom';
import { React, lazy, Suspense } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Container } from './App.styled';
import { Loader } from './Loader/Loader';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  return (
    <Container>
      <SharedLayout />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
