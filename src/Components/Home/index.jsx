import Footer from "../Footer";
import Heder from "../Heder";
import { Card } from "./Card";
import { Youtube } from "./Videos";

function Home() {
  return (
    <>
      {Youtube.map((Video, index) => {
        return <Card lista={Video} key={index} />;
      })}
      <Heder />
      <Footer />
    </>
  );
}

export default Home;
