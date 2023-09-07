import Footer from "../../../Components/Footer";
import Heder from "../../../Components/Heder";
import "./GiaFrontEnd.css";
import { Nav_Gia_Front_End } from "./Nav_Gia_Front_End";

export function GiaFrontEnd() {
  return (
    <div className="container" id="HomeGiaFrontEnd">
      <Heder />
      <div className="row my-5">
        <div className="col">
          <div className="contenedor">
            <h1 className="m-4">Gia Front End</h1>
            <hr />
            <p>
              Bienvenidos a la guía de estudio "Fundamentos de HTML y CSS". Esta
              guía está diseñada para ayudarte a adquirir los conocimientos
              esenciales para convertirte en un desarrollador front-end
              competente. A lo largo de esta guía, encontrarás recursos de
              aprendizaje, como videos, tutoriales en línea y sitios web, que te
              guiarán en tu camino hacia la maestría en HTML y CSS, así como en
              otras áreas relacionadas con el desarrollo web.
            </p>
            <p>
              HTML (HyperText Markup Language) y CSS (Cascading Style Sheets)
              son lenguajes fundamentales en la construcción de sitios web. HTML
              se utiliza para crear la estructura y el contenido de una página
              web, mientras que CSS se encarga de la presentación y el estilo.
            </p>
          </div>
        </div>
      </div>
      <Nav_Gia_Front_End />
      <Footer />
    </div>
  );
}
