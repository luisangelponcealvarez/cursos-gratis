import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Error404 from "./Components/404";
import { GiaFrontEnd } from "./site/Gias/GiaFrontEnd";
import {
  Despliegue_y_Hosting,
  Estilización_avanzada_con_CSS,
  Frameworks_de_Front_end,
  Fundamentos_de_HTML_y_CSS,
  Gestión_de_Paquetes_y_Automatización,
  Optimización_de_Rendimiento_y_Accesibilidad,
  Programación_JavaScript,
  Proyectos_Prácticos,
  Pruebas_y_Depuración,
  Versionado_de_Código,
} from "./site/Gias/GiaFrontEnd/Componentes_de_la_gia";
import { Notion } from "./site/Notion";

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
          <Route
            path="/Optimización_de_Rendimiento_y_Accesibilidad"
            element={<Optimización_de_Rendimiento_y_Accesibilidad />}
          />
          <Route
            path="/Versionado_de_Código"
            element={<Versionado_de_Código />}
          />
          <Route
            path="/Despliegue_y_Hosting"
            element={<Despliegue_y_Hosting />}
          />
          <Route
            path="/Proyectos_Prácticos"
            element={<Proyectos_Prácticos />}
          />

          {/* sites */}
          {/* <Route path="/Notion" element={<Notion />} /> */}

          {/* Ruta para el componente que sirve para indicar que no existe esta pagina si no esta la ruta */}
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}
