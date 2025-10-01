export const fetchGenreMovies = async (genreId) => {
  const response = await fetch(`/api/genreMoviesApi?id=${genreId}`);
  const data = await response.json();
  const results = data.results;
  return results;
};
