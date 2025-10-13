import get from "./axios.js";

export const getMovieDetails = (id) => {
  return get(`/movie/${id}`);
};
