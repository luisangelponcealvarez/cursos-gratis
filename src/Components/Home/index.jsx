import Footer from "../Footer";
import Heder from "../Heder";
import { Card } from "./Card";
import { Youtube } from "./Videos";

function Home() {
  return (
    <div className="Home d-inline-flex flex-wrap">
      {Youtube.map((Video, index) => {
        return <Card lista={Video} key={index} />;
      })}
      <Heder />
      <Footer />
    </div>
  );
}

export default Home;
