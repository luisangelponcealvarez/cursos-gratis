import ReactPlayer from "react-player";
import { Nav_Gia_Front_End } from "./Nav_Gia_Front_End";
import Footer from "../../../Components/Footer";
import Heder from "../../../Components/Heder";

export function Fundamentos_de_HTML_y_CSS() {
  return (
    <div className="container">
      <Heder />
      <div className="row my-5">
        <div className="col">
          <section>
            <h2>1. Fundamentos de HTML y CSS</h2>
            <hr />
            <h3>HTML Crash Course:</h3>
            <ReactPlayer
              className="player"
              url="https://www.youtube.com/watch?v=916GWv2Qs08&pp=ygUSSFRNTCBDcmFzaCBDb3Vyc2U6"
              controls={true} // Muestra los controles de reproducción (pausa, reproducción, volumen, etc.).
            />
          </section>

          <section>
            <h3>CSS Basics: </h3>
            <ReactPlayer
              className="player"
              url="https://www.youtube.com/watch?v=1Rs2ND1ryYc"
              controls={true}
            />
          </section>

          <section>
            <h3>W3Schools - HTML Tutorial:</h3>
            <a
              href="https://www.w3schools.com/html/"
              className="btn btn-outline-secondary m-2"
            >
              Sitio
            </a>
            <ReactPlayer
              className="player"
              url="https://www.youtube.com/watch?v=ewZ_YWbIWXI&pp=ygUZVzNTY2hvb2xzIC0gSFRNTCBUdXRvcmlhbA%3D%3D"
              controls={true}
            />
          </section>

          <section>
            <h3>MDN Web Docs - CSS:</h3>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              className="btn btn-outline-secondary m-2"
            >
              Sitio
            </a>
            <ReactPlayer
              className="player"
              url="https://www.youtube.com/watch?v=H54Ka7eL_50&pp=ygUSTUROIFdlYiBEb2NzIC0gQ1NT"
              controls={true}
            />
          </section>
        </div>
      </div>
      <Nav_Gia_Front_End />
      <Footer />
    </div>
  );
}
