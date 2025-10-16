import "./header.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="header-content">
        <div id="header-bg"></div>
        <Link id="home-name" to={"/"}>
          <h1>
            <span id="title-red">Ruby</span>Movies
          </h1>
        </Link>
        <SearchBar />
        <div id="main-nav">
          <Link className="label" to="/user/favorites">
            <span>Favorites</span>
          </Link>

          <a className="label" href="">
            <span>Sign in</span>
          </a>
          <a className="label" href="">
            <span>Create Account</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
