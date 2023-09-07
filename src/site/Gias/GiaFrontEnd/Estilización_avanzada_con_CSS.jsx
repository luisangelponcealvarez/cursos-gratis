import { Nav_Gia_Front_End } from "./Nav_Gia_Front_End";
import Footer from "../../../Components/Footer";
import Heder from "../../../Components/Heder";
import ReactPlayer from "react-player";

export function Estilización_avanzada_con_CSS() {
  return (
    <div className="container">
      <Heder />
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
      <Nav_Gia_Front_End />
      <Footer />
    </div>
  );
}
