import { useQuery } from "@tanstack/react-query";
import { getMoviesGenre } from "../lib/getMoviesGenre.js";

export const useMoviesGenre = (
  mediaType = "movie",
  pageNumber = 1,
  sortBy = "popularity.desc",
  genre = null
) =>
  useQuery({
    queryKey: ["genreMovies", mediaType, pageNumber, sortBy, genre],
    queryFn: () => getMoviesGenre(mediaType, pageNumber, sortBy, genre),
    enabled: !!genre, // Only fetch if genre is present
  });
