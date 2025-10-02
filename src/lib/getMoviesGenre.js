import get from "./axios.js";

export const getMoviesGenre = (
  mediaType = "movie",
  pageNumber = 1,
  sortBy = "popularity.desc",
  genre = null
) => {
  return get(`/discover/${mediaType}`, {
    page: pageNumber,
    sort_by: sortBy,
    include_adult: false,
    with_genres: genre,
  }).then((data) => data.results);
};
