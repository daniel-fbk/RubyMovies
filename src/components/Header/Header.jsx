import "./header.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  return (
    <header>
      <nav className="header-content">
        <div id="header-bg"></div>
        <a id="home-name" href="#">
          <h1>
            <span id="title-red">Ruby</span>Movies
          </h1>
        </a>
        <SearchBar />
        <div id="main-nav">
          <a className="label" href="">
            <span>Favorites</span>
          </a>
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
