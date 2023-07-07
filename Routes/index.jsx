import App from "../src/App";
import Error404 from "../src/Components/404";
import { createBrowserRouter } from "react-router-dom";
import GiaFrontEnd from "../src/site/gia";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/GiaFrontEnd",
    element: <GiaFrontEnd />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
];

export const router = createBrowserRouter(routes);
