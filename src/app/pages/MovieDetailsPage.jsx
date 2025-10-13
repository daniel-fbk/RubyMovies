import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import Poster from "../../components/Poster/Poster";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useMovieDetails(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading movie</p>;
  if (!data) return <p>No movie found</p>;

  const { backdrop_path, budget, genres, overview, popularity, poster_path, release_date, runtime, title } = data;

  const convertRuntime = Math.floor(runtime / 60) + "h " + (runtime % 60) + "m";

  console.log(data);
  return (
    <>
      <div
        className="background"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})` }}
      ></div>
      <div className="content-container">
        <section className="movie-details-container">
          <div className="poster-details-container">
            <Poster movie={data} size="original" />
          </div>
          <article className="movie-details">
            <h1 className="movie-details-title">{title}</h1>
            <div className="genre-year-age-time">
              <div className="genres-container">
                {genres.map((genre) => (
                  <p key={genre} className="genre">
                    {genre.name}
                  </p>
                ))}
              </div>
              <p className="release_date-details">{release_date}</p>
              <p className="age-rating">5</p>
              <p className="run-time-details">{convertRuntime}</p>
            </div>
            <p className="description-details">{overview}</p>
            <div className="rating-container-deatils">
              <img src="" alt="" className="rating-star-details" />
              <p className="rating-details"></p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
