import * as CONFIG from "../../lib/config.js";
import "./poster.css";

export default function Poster({ movie, size }) {
  const { title, poster_path } = movie;
  const poster = poster_path ? CONFIG.IMAGE_SIZE[size.toUpperCase()] + poster_path : CONFIG.NO_IMAGE;

  return <img src={poster} alt={title} />;
}
