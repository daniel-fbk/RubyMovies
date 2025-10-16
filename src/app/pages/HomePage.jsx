import * as CONFIG from "../../lib/config.js";
import { useMoviesGenre } from "../../hooks/useMoviesGenre.js";
import Poster from "../../components/Poster/Poster.jsx";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="page-content">
      {CONFIG.GENRE.map((genre) => {
        const { data: movies } = useMoviesGenre("movie", 1, "popularity.desc", genre.id);

        return (
          <div key={genre.id} className="movies-container">
            <Link to={genre.name}>
              <h2>{genre.name}</h2>
            </Link>

            <Swiper slidesPerView={"auto"} spaceBetween={25} grabCursor={true}>
              {movies?.map((movie) => (
                <SwiperSlide key={movie.id} style={{ width: "180px" }}>
                  <Link className="movie-card" to={`/movie/${movie.id}/${movie.title}`}>
                    <div className="poster-container">
                      <Poster movie={movie} size="medium" />
                    </div>
                    <h4>{movie.title}</h4>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        );
      })}
    </div>
  );
}
