import React from "react";
import ReactPlayer from "react-player";
import "./video.css";

function Home(props) {
  const { titulo, autor, video } = props.lista;
  return (
    <div className=" m-2 d-inline-flex flex-wrap">
      <div className="card rounded" style={{ width: "400px" }}>
        <ReactPlayer
          className="video"
          width="100%"
          height="350px"
          url={video}
          controls
        />
        <div className="card-body">
          <h2 className="card-text fs-3">{titulo}</h2>
          <p className="card-text">Autor: {autor}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
