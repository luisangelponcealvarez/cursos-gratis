import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Error404 from "./Components/404";
import { GiaFrontEnd } from "./site/Gias/GiaFrontEnd";
import {
  Estilización_avanzada_con_CSS,
  Frameworks_de_Front_end,
  Fundamentos_de_HTML_y_CSS,
  Gestión_de_Paquetes_y_Automatización,
  Programación_JavaScript,
  Pruebas_y_Depuración,
} from "./site/Gias/GiaFrontEnd/Componentes_de_la_gia";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Rutas de componentes de Gia Front End */}
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

          <Route
            path="/Frameworks_de_Front_end"
            element={<Frameworks_de_Front_end />}
          />
          <Route
            path="/Gestión_de_Paquetes_y_Automatización"
            element={<Gestión_de_Paquetes_y_Automatización />}
          />
          <Route
            path="/Pruebas_y_Depuración"
            element={<Pruebas_y_Depuración />}
          />

          {/* Ruta para el componente que sirve para indicar que no existe esta pagina si no esta la ruta */}
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}
