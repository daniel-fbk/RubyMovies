import { useQuery } from "@tanstack/react-query";
import { getMoviesPopular } from "../lib/getMoviesPopular.js";

export const useMoviesPopular = (mediaType = "movie", pageNumber = 1) =>
  useQuery({
    queryKey: ["popularMovies", mediaType, pageNumber],
    queryFn: () => getMoviesPopular(mediaType, pageNumber),
  });
