import * as CONFIG from "../../lib/config.js";
import "./movieCard.css";

export default function MovieCard({ movie }) {
  const { title, poster_path } = movie;
  const poster = poster_path
    ? CONFIG.IMAGE_SIZE.SMALL + poster_path
    : CONFIG.NO_IMAGE;

  return (
    <>
      <div className="poster-container">
        <img src={poster} alt={title} />
      </div>
    </>
  );
}
