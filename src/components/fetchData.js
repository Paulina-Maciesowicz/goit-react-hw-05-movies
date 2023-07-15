export const fetchData = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=474a901dde83d12b9be138b9ccc9ba9f`
    );
    const data = await response.json();
    console.log(response);
    return data.hits;
  } catch (error) {
    throw error;
  }
};
