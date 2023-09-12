import ReactPlayer from "react-player";
import Footer from "../../Components/Footer";
import Heder from "../../Components/Heder";
import "./Notion.css";

export function Notion() {
  return (
    <>
      <Heder />
      <div id="notion" className="container">
        <div className="row my-5">
          <div className="col">
            <div className="titulo m-4">
              <hr />
              <h2>Notion</h2>
              <hr />
              {/* <a
                href="https://luisangelponcealvarez.netlify.app/RecursosNotion"
                target="_blank"
                className="btn btn-outline-secondary"
              >
                Recursos de Notion
              </a> */}
            </div>

            <section>
              <h3>1. Introducción a Notion</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=L2AzN2aEq54&pp=ygUWaW50cm9kdWNjacOzbiBhIG5vdGlvbg%3D%3D"
                controls={true}
              />
            </section>

            <section>
              <h3>2. Crear tu Cuenta</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=K5Ikf9yVKX4&pp=ygUYQ3JlYXIgdHUgQ3VlbnRhIGEgbm90aW9u"
                controls={true}
              />
            </section>

            <section>
              <h3>3. La Interfaz de Notion</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=Qg4RAZhjZD8"
                controls={true}
              />
            </section>

            <section>
              <h3>4. Crear Páginas y Bases de Datos</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=l0Pe4REaL8Y&pp=ygUoQ3JlYXIgUMOhZ2luYXMgeSBCYXNlcyBkZSBEYXRvcyBhIG5vdGlvbg%3D%3D"
                controls={true}
              />
            </section>

            <section>
              <h3>5. Blocs de Notas y Listas de Tareas</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=RwaNiGQp7a4&pp=ygUrQmxvY3MgZGUgTm90YXMgeSBMaXN0YXMgZGUgVGFyZWFzIGVuIG5vdGlvbg%3D%3D"
                controls={true}
              />
            </section>

            <section>
              <h3>6. Gestión de Contenido</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=aBXEsiJiL5Q&pp=ygUgR2VzdGnDs24gZGUgQ29udGVuaWRvIGVuICBub3Rpb24%3D"
                controls={true}
              />
            </section>

            <section>
              <h3>7. Organización con Etiquetas y Filtros</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=k3SobezUN3s&pp=ygUvT3JnYW5pemFjacOzbiBjb24gRXRpcXVldGFzIHkgRmlsdHJvc2VuICBub3Rpb24%3D"
                controls={true}
              />
            </section>

            <section>
              <h3>8. Relaciones entre Páginas y Bases de Datos</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=9m_uWv4S4D8&pp=ygUxUmVsYWNpb25lcyBlbnRyZSBQw6FnaW5hcyB5IEJhc2VzIGRlIERhdG9zIG5vdGlvbg%3D%3D"
                controls={true}
              />
            </section>
            <section>
              <h3>9. Fórmulas y Cálculos</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=8Ponh3EDqYE&pp=ygUgRsOzcm11bGFzIHkgQ8OhbGN1bG9zIGVuICBub3Rpb24%3D"
                controls={true}
              />
            </section>

            <section>
              <h3>10. Colaboración y Compartir Notion</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=TsrYr0DnOYs&pp=ygUrQ29sYWJvcmFjacOzbiB5IENvbXBhcnRpciBOb3Rpb24gZW4gIG5vdGlvbg%3D%3D"
                controls={true}
              />
            </section>

            <section>
              <h3>11. Integraciones y Automatizaciones</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=gca-egVhGy0&pp=ygUrSW50ZWdyYWNpb25lcyB5IEF1dG9tYXRpemFjaW9uZXMgZW4gIG5vdGlvbg%3D%3D"
                controls={true}
              />
            </section>

            <section>
              <h3>12. Personalización y Plantillas</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=JOSvLDN3960&t=49s&pp=ygUoUGVyc29uYWxpemFjacOzbiB5IFBsYW50aWxsYXMgZW4gIG5vdGlvbg%3D%3D"
                controls={true}
              />
            </section>

            <section>
              <h3>13. Consejos Avanzados y Trucos</h3>
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=DxYEwvtzGVA&t=243s&pp=ygUmQ29uc2Vqb3MgQXZhbnphZG9zIHkgVHJ1Y29zIGVuICBub3Rpb24%3D"
                controls={true}
              />
            </section>

            <p>
              Recuerda que Notion es una herramienta muy versátil, por lo que
              puedes adaptar esta guía según tus necesidades específicas. Además
              de los videos, asegúrate de practicar y explorar las
              características por ti mismo para obtener una comprensión más
              profunda. ¡Buena suerte en tu estudio de Notion!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
