import get from "./axios.js";

export const getMovieDetails = (mediaType = "movie", id) => {
  return get(`/${mediaType}/${id}`).then((data) => data.results);
};
