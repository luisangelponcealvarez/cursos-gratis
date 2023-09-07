import "./GiaFrontEnd.css";
import { Link } from "react-router-dom";

export function Nav_Gia_Front_End() {
  return (
    <>
      <nav className="nav-gia-frontend fixed-top">
        <ul>
          <h5 className="m-2">Lista de la Gia Front End</h5>

          <li>
            <Link
              to="/Fundamentos_de_HTML_y_CSS"
              className="btn btn-outline-secondary"
            >
              1. Fundamentos de HTML y CSS
            </Link>
          </li>

          <li>
            <Link
              to="/Estilización_avanzada_con_CSS"
              className="btn btn-outline-secondary"
            >
              2. Estilización avanzada con CSS
            </Link>
          </li>

          <li>
            <Link
              to="/Programación_JavaScript"
              className="btn btn-outline-secondary"
            >
              3. Programación JavaScript
            </Link>
          </li>

          <li>
            <Link
              to="/Frameworks_de_Front_end/"
              className="btn btn-outline-secondary"
            >
              4. Frameworks de Front_end
            </Link>
          </li>

          <li>
            <Link
              to="/Gestión_de_Paquetes_y_Automatización"
              className="btn btn-outline-secondary"
            >
              5. Gestión de Paquetes y Automatización
            </Link>
          </li>

          <li>
            <Link
              to="/Pruebas_y_Depuración"
              className="btn btn-outline-secondary"
            >
              6. Pruebas y Depuración
            </Link>
          </li>

          <li>
            <Link
              to="/Optimización_de_Rendimiento_y_Accesibilidad"
              className="btn btn-outline-secondary"
            >
              7. Optimización de Rendimiento y Accesibilidad
            </Link>
          </li>

          <li>
            <Link
              to="/Versionado de Código"
              className="btn btn-outline-secondary"
            >
              8. Versionado de Código
            </Link>
          </li>

          <li>
            <Link
              to="/Despliegue y Hosting"
              className="btn btn-outline-secondary"
            >
              9. Despliegue y Hosting
            </Link>
          </li>

          <li>
            <Link
              to="/Proyectos Prácticos"
              className="btn btn-outline-secondary"
            >
              10. Proyectos Prácticos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
