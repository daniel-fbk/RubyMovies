import App from "./App";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import UserFavoritesPage from "./pages/UserFavoritesPage";
import GenrePage from "./pages/GenrePage";

const routes = [
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: ":genre/",
        element: <GenrePage />,
      },
      {
        path: "movie/:id/:title",
        element: <MovieDetailsPage />,
      },
      {
        path: "find/",
        element: <SearchResultsPage />,
      },
      {
        path: "user/favorites/",
        element: <UserFavoritesPage />,
      },
    ],
  },
];

export default routes;
