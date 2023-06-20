import "./404.css";
import image from "../../../public/img/404.gif";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <main className="main__404">
      <img className="image-404" src={image} alt="404" />
      <p className="notfound-text">
        Esta página no existe o está en mantenimiento :c
      </p>
      <Link className="notfound-text__link" to="/">
        Regresa al Inicio
      </Link>
    </main>
  );
}

export default Error404;