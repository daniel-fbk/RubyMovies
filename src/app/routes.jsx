import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";

const routes = [
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
    ],
  },
];

export default routes;
