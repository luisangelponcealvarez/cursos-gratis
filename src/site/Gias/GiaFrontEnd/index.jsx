import Footer from "../../../Components/Footer";
import Heder from "../../../Components/Heder";
import "./GiaFrontEnd.css";
import ReactPlayer from "react-player";

export function GiaFrontEnd() {
  return (
    <>
      <Heder />
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <h1 className="text-center">Gia Front End</h1>
            <hr />
          </div>

          <section>
            <h2 id="Fundamentos_de_HTML_y_CSS">1. Fundamentos de HTML y CSS</h2>
            <hr />
            <h3>HTML Crash Course:</h3>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=916GWv2Qs08&pp=ygUSSFRNTCBDcmFzaCBDb3Vyc2U6"
              controls={true} // Muestra los controles de reproducción (pausa, reproducción, volumen, etc.).
            />
          </section>

          <section>
            <h3>CSS Basics: </h3>
            <ReactPlayer
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
              url="https://www.youtube.com/watch?v=H54Ka7eL_50&pp=ygUSTUROIFdlYiBEb2NzIC0gQ1NT"
              controls={true}
            />
          </section>
        </div>

        <div className="row my-5">
          <div className="col">
            <hr />
            <h2>2. Estilización avanzada con CSS</h2>
            <hr />

            <section>
              <h3>CSS Flexbox:</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=-Wlt8NRtOpo&pp=ygUMQ1NTIEZsZXhib3g6"
                controls={true}
              />
            </section>

            <section>
              <h3>CSS Grid:</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=QBOUSrMqlSQ&pp=ygUIQ1NTIEdyaWQ%3D"
                controls={true}
              />
            </section>

            <section>
              <h3>Sass (Syntactically Awesome Stylesheets):</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=_a5j7KoflTs&pp=ygUpU2FzcyAoU3ludGFjdGljYWxseSBBd2Vzb21lIFN0eWxlc2hlZXRzKTo%3D"
                controls={true}
              />
            </section>

            <section>
              <h3>Bootstrap:</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=QCw0L6FupQ0"
                controls={true}
              />
            </section>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <hr />
            <h3>3. Programación JavaScript</h3>
            <hr />

            <section>
              <h3>Nivel Junior:</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=z95mZVUcJ-E&t=48s&pp=ygUXSmF2YVNjcmlwdCBGdW5kYW1lbnRhbHM%3D"
                controls={true}
              />
            </section>

            <section>
              <h3>Nivel MID LEVEL:</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=xOinGb2MZSk&t=329s&pp=ygUbRE9NIE1hbmlwdWxhdGlvbjogc295IGRhbHRv"
                controls={true}
              />
            </section>

            <section>
              <h3>Nivel Master:</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=EbMi1Qj4rVE&t=8s&pp=ygUbRE9NIE1hbmlwdWxhdGlvbjogc295IGRhbHRv"
                controls={true}
              />
            </section>

            <section>
              <h3>DOM Manipulation:</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=5fb2aPlgoys&pp=ygURRE9NIE1hbmlwdWxhdGlvbjo%3D"
                controls={true}
              />
            </section>

            <section>
              <h3>Event Listeners:</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=GUTt0qKUDyU&pp=ygUPRXZlbnQgTGlzdGVuZXJz"
                controls={true}
              />
            </section>

            <section>
              <h3>ES6 (ECMAScript 2015):</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=LWiMWZ9-cdw&pp=ygUVRVM2IChFQ01BU2NyaXB0IDIwMTUp"
                controls={true}
              />
            </section>
            <section>
              <h3>jQuery:</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=rSjCJGoH-GQ&pp=ygUHalF1ZXJ5Og%3D%3D"
                controls={true}
              />
            </section>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <hr />
            <h3>4. Frameworks de Front-end</h3>
            <hr />

            <section>
              <h3>React:</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=7iobxzd_2wY&pp=ygUFUmVhY3Q%3D"
                controls={true} // Muestra los controles de reproducción (pausa, reproducción, volumen, etc.).
              />
            </section>

            <section>
              <h3>Angular:</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=sS90VVmBPcg&pp=ygUNY3Vyc28gQW5ndWxhcg%3D%3D"
                controls={true} // Muestra los controles de reproducción (pausa, reproducción, volumen, etc.).
              />
            </section>

            <section>
              <h3>Vue.js:</h3>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=7yc5RuAVHqo&pp=ygUQY3Vyc28gZGUgVnVlLmpzOg%3D%3D"
                controls={true}
              />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
