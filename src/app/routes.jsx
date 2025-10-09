import App from "./App";
import HomePage from "./pages/HomePage";
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
        path: "find/",
        element: <SearchResultsPage />,
      },
    ],
  },
];

export default routes;
