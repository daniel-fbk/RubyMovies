import get from "./axios.js";
import { getMovieDetails } from "./getMovieDetails.js";

// export const fetchMovieSearch = async (title, type) => {
//   const response = await fetch(`/api/movieSearchApi?title=${title}`);
//   const data = await response.json();
//   const results = data.results;

//   if (type === "input") {
//     return results;
//   } else {
//     getMovieDetails(results[0].id);
//   }
// };

export const getMovieSearch = (searchQuery, pageNumber = 1) => {
  return get("/search/movie", {
    query: searchQuery,
    include_adult: false,
    page: pageNumber,
  }).then((data) => data.results);
};
