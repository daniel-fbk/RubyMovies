import * as CONFIG from "../../lib/config.js";
import { useMoviesGenre } from "../../hooks/useMoviesGenre.js";
import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HomePage() {
  return (
    <div className="page-content">
      {CONFIG.GENRE.map((genre) => {
        const { data: movies } = useMoviesGenre(
          "movie",
          1,
          "popularity.desc",
          genre.id
        );

        return (
          <div key={genre.id} className="movies-container">
            <h2>{genre.name}</h2>
            <Swiper slidesPerView={"auto"} spaceBetween={0} grabCursor={true}>
              <div className="movies-row">
                {movies?.map((movie) => (
                  <SwiperSlide key={movie.id} style={{ width: "200px" }}>
                    <MovieCard movie={movie} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        );
      })}
    </div>
  );
}
