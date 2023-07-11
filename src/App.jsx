import Footer from "./Components/Footer";
import Heder from "./Components/Heder";
import Home from "./Components/Home";
import { Youtube } from "./Components/Home/Videos";

function App() {
  // esta es la función para leer la lista de videos de youtube para la pagina de inicio

  const video = Youtube.map((Video, index) => {
    return <Home lista={Video} key={index} />;
  });
  return (
    <>
      <Heder />
      <section>{video}</section>
      <Footer />
    </>
  );
}

export default App;
