import Heder from "../../Components/Heder";
import Card from "./Card";
import { ListVideos } from "./ListVideos";

function Luisangelponce() {
  const videos = ListVideos.map((video, index) => {
    return <Card videos={video} key={index} />;
  });
  return (
    <>
      <Heder />
      <section>{videos}</section>
    </>
  );
}

export default Luisangelponce;
