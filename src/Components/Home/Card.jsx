import ReactPlayer from "react-player";

function Card(props) {
  const { titulo, descripción, Link } = props.lista;
  return (
    <>
      <h1>{titulo}</h1>
      <p>{descripción}</p>
      <ReactPlayer src={Link} width="400px" height="400px" />
    </>
  );
}

export default Card;
