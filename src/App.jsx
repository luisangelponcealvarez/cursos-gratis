import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Error404 from "./Components/404";
import { GiaFrontEnd } from "./site/Gias/GiaFrontEnd";
import { Estilización_avanzada_con_CSS } from "./site/Gias/GiaFrontEnd/Estilización_avanzada_con_CSS";
import { Fundamentos_de_HTML_y_CSS } from "./site/Gias/GiaFrontEnd/Fundamentos_de_HTML_y_CSS";
import { Programación_JavaScript } from "./site/Gias/GiaFrontEnd/Programación_JavaScript";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GiaFrontEnd" element={<GiaFrontEnd />} />
          <Route
            path="/Fundamentos_de_HTML_y_CSS"
            element={<Fundamentos_de_HTML_y_CSS />}
          />
          <Route
            path="/Estilización_avanzada_con_CSS"
            element={<Estilización_avanzada_con_CSS />}
          />
          <Route
            path="/Programación_JavaScript"
            element={<Programación_JavaScript />}
          />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}
