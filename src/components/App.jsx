import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { Container, Header, Logo, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          MovieLovers
        </Logo>
        <nav>
          <Link to="/goit-react-hw-05-movies/" end>
            Home
          </Link>
          <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Home />} />

        <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
        <Route
          path="/goit-react-hw-05-movies/movies/:movieId"
          element={<MovieDetails />}
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};
