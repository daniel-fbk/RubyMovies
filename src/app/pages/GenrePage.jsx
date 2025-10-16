import { Link, useParams } from "react-router-dom";
import { useMoviesGenre } from "../../hooks/useMoviesGenre";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import * as CONFIG from "../../lib/config";
import Poster from "../../components/Poster/Poster";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";

export default function GenrePage() {
  const { genre } = useParams();
  const [favorites, setFavorites] = useLocalStorage(CONFIG.FAVORITES_KEY, []);

  const currentGenre = CONFIG.GENRE.find((g) => g.name === genre);

  const { data: movies, isLoading, isError } = useMoviesGenre("movie", 1, "popularity.desc", currentGenre.id);

  if (isLoading) return <p>Laster filmer...</p>;

  if (isError) return <p>Kunne ikke hente filmer for sjangeren: {genre}</p>;

  return (
    <>
      <h2 className="genre-title">{currentGenre.name}</h2>

      <div className="grid">
        {movies.map((movie) => (
          <div className="favorites-movie-container" key={movie.id}>
            <Link to={`/movie/${movie.id}/${movie.title}`}>
              <div className="favorites-poster-container">
                <Poster movie={movie} size="original" />
              </div>
              <h3>{movie.title}</h3>
            </Link>

            <div className="fav-absolute">
              <FavoriteButton movie={movie} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
