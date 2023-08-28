import ReactPlayer from "react-player";
import "./Home.css";

export function Card(props) {
  const { titulo, autor, video } = props.lista;
  return (
    <div className="Home d-inline-flex flex-wrap">
      <div className="card">
        <ReactPlayer className="video" url={video} controls />
        <div className="card-body">
          <h1 className="card-text fs-5">{titulo}</h1>
          <p className="card-text">Autor(@): {autor}</p>
        </div>
      </div>
    </div>
  );
}
