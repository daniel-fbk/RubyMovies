import App from "./App";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SearchResultsPage from "./pages/SearchResultsPage";

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
        path: "movie/:id/:title",
        element: <MovieDetailsPage />,
      },
      {
        path: "find/",
        element: <SearchResultsPage />,
      },
    ],
  },
];

export default routes;
