import ReactPlayer from "react-player";
import Heder from "../../../Components/Heder";
import { Nav_Gia_Front_End } from "./Nav_Gia_Front_End";
import "./GiaFrontEnd.css";

export function Programación_JavaScript() {
  return (
    <div className="container">
      <Heder />
      <div className="row my-5">
        <div className="col">
          <div className="contenedor">
            <hr />
            <h3>3. Programación JavaScript</h3>
            <hr />

            <section>
              <h3>Nivel Junior:</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=z95mZVUcJ-E&t=48s&pp=ygUXSmF2YVNjcmlwdCBGdW5kYW1lbnRhbHM%3D"
                width="100%"
                height="300px"
                controls={true}
              />
            </section>

            <section>
              <h3>Nivel MID LEVEL:</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=xOinGb2MZSk&t=329s&pp=ygUbRE9NIE1hbmlwdWxhdGlvbjogc295IGRhbHRv"
                controls={true}
              />
            </section>

            <section>
              <h3>Nivel Master:</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=EbMi1Qj4rVE&t=8s&pp=ygUbRE9NIE1hbmlwdWxhdGlvbjogc295IGRhbHRv"
                controls={true}
              />
            </section>

            <section>
              <h3>DOM Manipulation:</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=5fb2aPlgoys&pp=ygURRE9NIE1hbmlwdWxhdGlvbjo%3D"
                controls={true}
              />
            </section>

            <section>
              <h3>Event Listeners:</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=GUTt0qKUDyU&pp=ygUPRXZlbnQgTGlzdGVuZXJz"
                controls={true}
              />
            </section>

            <section>
              <h3>ES6 (ECMAScript 2015):</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=LWiMWZ9-cdw&pp=ygUVRVM2IChFQ01BU2NyaXB0IDIwMTUp"
                controls={true}
              />
            </section>
            <section>
              <h3>jQuery:</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=rSjCJGoH-GQ&pp=ygUHalF1ZXJ5Og%3D%3D"
                controls={true}
              />
            </section>
          </div>
        </div>
      </div>
      <Nav_Gia_Front_End />
    </div>
  );
}
