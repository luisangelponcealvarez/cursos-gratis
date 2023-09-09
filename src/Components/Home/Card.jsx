import ReactPlayer from "react-player";
import "./Home.css";

export function Card(props) {
  const { titulo, video } = props.lista;
  return (
    <div className="card">
      <ReactPlayer className="video" url={video} controls />
      <div className="card-body">
        <h1 className="card-text fs-5">{titulo}</h1>
      </div>
    </div>
  );
}
