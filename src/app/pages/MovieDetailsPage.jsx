import * as CONFIG from "../../lib/config.js";
import { useMovieSearch } from "../../hooks/useMovieSearch.js";

const { data: movies } = useMovieSearch(searchInput, "input");

// import { useEffect, useState } from "react";
// import { fetchMoviesPopular } from "../utility/fetchMoviesPopular.js";
// import { fetchMovieDetails } from "../utility/fetchMovieDetails.js";

// export default function MovieDetails() {
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadMovie = async () = {
//       try {}
//     }
//   })

//   return (
//     <>
//       <h1>test</h1>
//     </>
//   );
// }
