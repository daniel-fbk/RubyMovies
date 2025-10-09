import { useQuery } from "@tanstack/react-query";
import { getMovieSearch } from "../lib/getMovieSearch.js";

export const useMovieSearch = (searchQuery, pageNumber = 1) =>
  useQuery({
    queryKey: ["searchParams", searchQuery, pageNumber],
    queryFn: () => getMovieSearch(searchQuery, pageNumber),
    enabled: !!searchQuery,
  });
