export const fetchData = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=474a901dde83d12b9be138b9ccc9ba9f`
    );
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (error) {
    throw error;
  }
};
  
export const fetchSearchMovies = async (query, page = 1) => {
  try {
    const table = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=474a901dde83d12b9be138b9ccc9ba9f&language=en-US&query=${query}&page=${page}&include_adult=false`
    );
    const data = await table.json();
    console.log(data);
    return data.results;
    } catch (error) {
      throw error;
    }
  }

  export const fetchMovieDetails = async (id) => {
    try {
      const details = await fetch(
        // `https://api.themoviedb.org/3/search/movie?api_key=474a901dde83d12b9be138b9ccc9ba9f&language=en-US&query=${query}&page=${page}&include_adult=false`

        // https://api.themoviedb.org/3/movie/{movie_id}

        `https://api.themoviedb.org/3/movie/575264?api_key=474a901dde83d12b9be138b9ccc9ba9f&language=en-US`
      );
      const data = await details.json();
      console.log(data);
      return data.results;
    } catch (error) {
      throw error;
    }
  };