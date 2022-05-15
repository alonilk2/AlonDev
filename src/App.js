import useScrollState from "./Hooks/useScrollState";

import Navbar from "./Components/Navbar";
import useWindowSize from "./Hooks/useWindowSize";
import useSpace from "./Hooks/useSpace";
import Pages from "./Components/Pages";
import { useEffect } from "react";
import "./App.css";
import "@fontsource/encode-sans-sc/700.css";
import "@fontsource/encode-sans/700.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PAGENUM = 6;

function App() {
  const [scrollState, setPageScrollState] = useScrollState(PAGENUM);
  const size = useWindowSize();
  const spaceBackground = useSpace();
  const ScrollDownAnimation = (
    <>
      <div className="chevron-container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
      <div className="chevron-container" style={{left: '1%', right: 'unset'}}>
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
    </>
  );
  if (size.width > 768) {
    return (
      <div className="App">
        <Navbar
          scrollState={scrollState}
          setPageScrollState={setPageScrollState}
        />
        {spaceBackground}
        {scrollState > -5 && ScrollDownAnimation}
        <Pages scrollState={scrollState} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        {scrollState > -5 && ScrollDownAnimation}
        <Pages />
      </div>
    );
  }
}

export default App;
