import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import * as CONFIG from "../../lib/config";
import Poster from "../../components/Poster/Poster";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";

export default function UserFavoritesPage() {
  const [favorites, setFavorites] = useLocalStorage(CONFIG.FAVORITES_KEY, []);
  const [compactLayout, setCompactLayout] = useLocalStorage(CONFIG.FAVORITE_PAGE_LAYOUT, false);

  return (
    <>
      <div className="layout-options">
        <label>
          <input
            className="checkbox"
            type="checkbox"
            checked={compactLayout}
            onChange={() => setCompactLayout(!compactLayout)}
          />
          Compact Layout
        </label>
      </div>

      <div className={`grid ${compactLayout ? "movies-container-compact" : ""}`}>
        {favorites.map((movie) => (
          <div className="favorites-movie-container" key={movie.id}>
            <Link to={`/movie/${movie.id}/${movie.title}`}>
              <div className="favorites-poster-container">
                <Poster movie={movie} size="original" />
              </div>
              {!compactLayout && <h3>{movie.title}</h3>}
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
