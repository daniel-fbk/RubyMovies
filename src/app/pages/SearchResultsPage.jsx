import { useEffect, useState } from "react";
import Poster from "../../components/Poster/Poster";
import { Link, useSearchParams } from "react-router-dom";
import { useMovieSearch } from "../../hooks/useMovieSearch";
import * as CONFIG from "../../lib/config.js";

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const { data: search, isLoading, isError } = useMovieSearch(q, page);

  // Set page to 1 on search
  useEffect(() => {
    setPage(1);
  }, [q]);

  // Pagination, store current loaded movies + next page
  useEffect(() => {
    if (search) {
      if (page === 1) {
        setMovies([...search]);
      } else {
        setMovies((prev) => [...prev, ...search]);
      }
    }
  }, [search, page]);

  console.log(movies);

  //   if (!q) return <p>Missing Search...</p>;
  //   if (isLoading) return <p>Loading...</p>;
  //   if (isError) return <p>Error</p>;

  if (q) {
    return (
      <>
        <div className="content-container">
          <h2>Search "{q}"</h2>
          <section className="movies-container">
            <ul className="search-movies-container">
              {movies.map((movie) => {
                const { id, title, release_date, genre_ids } = movie;
                return (
                  <li key={id}>
                    <Link to={`/movie/${id}/${title}`} className="search-movie-container">
                      <div className="search-poster-container">
                        <Poster movie={movie} size="small" />
                      </div>
                      <div className="search-details">
                        <p>{title}</p>
                        <p className="search-year">{release_date.substring(0, 4)}</p>
                        <div className="search-genres">
                          {genre_ids.map((id) => {
                            let genre = CONFIG.GENRE.find((g) => g.id === id);
                            return (
                              <p className="search-genre" key={id}>
                                {genre.name}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <button type="button" className="load-more-btn" onClick={() => setPage((prev) => prev + 1)}>
                See more ▼
              </button>
            )}
          </section>
        </div>
      </>
    );
  }
}
