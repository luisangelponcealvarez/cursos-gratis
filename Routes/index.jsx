import App from "../src/App";
import Error404 from "../src/Components/404";

import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
];

export const router = createBrowserRouter(routes);
