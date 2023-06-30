import ReactPlayer from "react-player";
import "../../Components/Home/Home.css";

function Card(props) {
  const { titulo, descripción, video } = props.videos;

  return (
    <>
      <div className="Home d-inline-flex flex-wrap justify-content-center aling-items-center">
        <div
          className="card rounded"
          style={{ border: "2px solid black", borderRadius: "5px" }}
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
            <p className="card-text">{descripción}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
