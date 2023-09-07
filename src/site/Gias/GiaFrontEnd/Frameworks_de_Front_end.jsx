import Heder from "../../../Components/Heder";
import { Nav_Gia_Front_End } from "./Nav_Gia_Front_End";

export function Frameworks_de_Front_end() {
  return (
    <div className="container">
      <Heder />
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
      <Nav_Gia_Front_End />
    </div>
  );
}
