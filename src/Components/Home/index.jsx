import Card from "./Card";
import { Youtube } from "./Videos";

function Home() {
  const video = Youtube.map((Video, index) => {
    return <Card lista={Video} key={index} />;
  });
  return (
    <>
      <section>{video}</section>
    </>
  );
}

export default Home;
