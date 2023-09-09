import "./404.css";
import image from "../../../public/img/404.gif";
import { Link } from "react-router-dom";
import Heder from "../Heder";

function Error404() {
  return (
    <main className="main__404">
      <img className="image-404" src={image} alt="404" />
      <p className="notfound-text">
        Esta página no existe o está en mantenimiento :c
      </p>
      {/* <p className="notfound-text">Esta página está en mantenimiento :c</p> */}
      <Heder />
    </main>
  );
}

export default Error404;
