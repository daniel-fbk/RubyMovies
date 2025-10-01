import get from "./axios.js";

export const getPopular = (mediaType = "movie", pageNumber = 1) => {
  return get(`/${mediaType}/popular`, { page: pageNumber }).then(
    (data) => data.results
  );
};

// export const fetchMoviesPopular = async () => {
//   const response = await fetch(`/api/moviesPopularApi`);
//   const data = await response.json();
//   const results = data.results[1].id;
//   fetchMovieDetails(results);
// };
