import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Error404 from "./Components/404";
import GiaFrontEnd from "./site/gia";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/GiaFrontEnd" element={<GiaFrontEnd />} /> */}
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}
