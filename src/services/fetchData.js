const baseURL = `https://api.themoviedb.org`;
const API_KEY = `474a901dde83d12b9be138b9ccc9ba9f`;

export const fetchData = async () => {
  try {
    const response = await fetch(
      `${baseURL}/3/trending/movie/day?api_key=${API_KEY}`
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
      `${baseURL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
    );
    const data = await table.json();
    console.log(data);
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieDetails = async id => {
  try {
    const details = await fetch(
      `${baseURL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const data = await details.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
