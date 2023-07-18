import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
// import { key } from '../../asset/pass';
import { Loader } from 'components/Loader/Loader';
import { fetchSearchMovies } from 'components/fetchData';

export function SearchMovies() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);

  const firstFetchMovie = movieName;

  useEffect(() => {
    if (firstFetchMovie === '') {
      return;
    }
    setIsLoading(true);
    const fetchMovie = async () => {
      try {
        const hits = await fetchSearchMovies(query);
        setResults(hits);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movie:', error);
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [firstFetchMovie, query]);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = async event => {
    setIsLoading(true);
    event.preventDefault();
    try {
      const hits = await fetchSearchMovies(query);
      setResults(hits);
      setIsLoading(false);
      setSearchParams(`query=${query}`);
    } catch (error) {
      console.error('Error searching for movie:', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={query} onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      {results.length === 0 ? (
        <p>No results yet.</p>
      ) : (
        <ul>
          {results.map(result => (
            <li key={result.id}>
              <Link
                to={`/goit-react-hw-05-movies/movies/${result.id}`}
                state={{
                  from: `/goit-react-hw-05-movies/movies?${searchParams}`,
                }}
              >
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchMovies;
