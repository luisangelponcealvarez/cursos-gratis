import CardVideo from "./CardVideo";
import ListVideos from "./Lista";

function Videos() {
  const video = ListVideos.map((Video, index) => {
    return <CardVideo lista={Video} key={index} />;
  });
  return (
    <>
      <section>{video}</section>
    </>
  );
}

export default Videos;
