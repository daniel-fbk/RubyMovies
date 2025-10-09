import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../lib/getMovieDetails";

export const useMovieDetails = (mediaType = "movie", id) =>
  useQuery({
    queryKey: [mediaType, id],
    queryFn: () => getMovieDetails(mediaType, id),
    enabled: !!id,
  });
