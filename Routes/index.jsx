// import App from "../src/App";
import Error404 from "../src/Components/404";

import { createBrowserRouter } from "react-router-dom";
import Luisangelponce from "../src/site/Luisangelponce";

const routes = [
  // {
  //   path: "/",
  //   element: <App />,
  // },
  {
    path: "/Luis_Angel_Ponce_Alvarez",
    element: <Luisangelponce />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
];

export const router = createBrowserRouter(routes);
