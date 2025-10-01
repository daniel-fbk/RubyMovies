import { useQuery } from "@tanstack/react-query";
import { getPopular } from "../lib/getMoviesPopular.js";

export const usePopularMovies = (mediaType = "movie", pageNumber = 1) =>
  useQuery({
    queryKey: ["popular", mediaType, pageNumber],
    queryFn: () => getPopular(mediaType, pageNumber),
  });
