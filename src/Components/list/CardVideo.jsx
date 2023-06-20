import React from "react";
import ReactPlayer from "react-player";

function CardVideo(props) {
  const { titulo, descripción, Video } = props.lista;
  return (
    <>
      <h1>{titulo}</h1>
      <p>{descripción}</p>
      <ReactPlayer src={Video} width="400px" height="400px" />
    </>
  );
}

export default CardVideo;
