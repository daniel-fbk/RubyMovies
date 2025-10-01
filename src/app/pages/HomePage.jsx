import { usePopularMovies } from "../../hooks/useMoviesPopular.js";

export default function HomePage() {
  const { data: popular } = usePopularMovies("movie");
  console.log(popular);

  return (
    <>
      <h1>Popular Movies</h1>
      <div className="moviecontainer">
        {popular?.map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
