import ReactPlayer from "react-player";
import "./Home.css";

function Home(props) {
  const { titulo, autor, video } = props.lista;
  return (
    <div className="Home d-inline-flex flex-wrap">
      <div
        className="card"
        style={{ border: "2px solid black", borderRadius: "15px" }}
      >
        <ReactPlayer
          className="video"
          width="100%"
          height="270px"
          url={video}
          controls
        />
        <div className="card-body">
          <h1 className="card-text fs-5">{titulo}</h1>
          <p className="card-text">Autor(@): {autor}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
