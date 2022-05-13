import useScrollState from "./Hooks/useScrollState";
import Home from "./Components/Home";
import IMBarber from "./Components/IMBarber";
import Cellu from "./Components/Cellu";
import Compound from "./Components/Compound";
import Navbar from "./Components/Navbar";
import useWindowSize from "./Hooks/useWindowSize";
import useSpace from "./Hooks/useSpace";
import Contact from "./Components/Contact";
import Pages from "./Components/Pages";
import { useEffect } from "react";
import "./App.css";
import "@fontsource/encode-sans-sc/700.css";
import "@fontsource/encode-sans/700.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PAGENUM = 5;
export const RenderPagesOnMobile = (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Home className="content-body-home" />
    <IMBarber className="content-body" />
    <Cellu className="content-body" />
    <Compound className="content-body" />
    <Contact className="content-body" />
  </div>
);

function App() {
  const [scrollState, setPageScrollState] = useScrollState(PAGENUM);
  const size = useWindowSize();
  const spaceBackground = useSpace();
  
  if (size.width > 768) {
    return (
      <div className="App">
        <Navbar scrollState={scrollState} setPageScrollState={setPageScrollState}/>
        {spaceBackground}
        <Pages scrollState={scrollState}/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        {/* {spaceBackground} */}
        <Pages />
      </div>
    );
  }
}

export default App;
