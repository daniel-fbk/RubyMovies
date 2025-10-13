import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../lib/getMovieDetails.js";

export const useMovieDetails = (id) =>
  useQuery({
    queryKey: [id],
    queryFn: () => getMovieDetails(id),
    enabled: !!id,
  });
