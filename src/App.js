import useScrollState from "./Hooks/useScrollState";
import Navbar from "./Components/Navbar";
import useWindowSize from "./Hooks/useWindowSize";
import useSpace from "./Hooks/useSpace";
import ScrollPages from "./Components/ScrollPages";
import "./App.css";
import "@fontsource/encode-sans-sc/700.css";
import "@fontsource/encode-sans/700.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialLinks } from "./Components/SocialLinks";

const PAGENUM = 7;
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
      <div className="chevron-container" style={{ left: "1%", right: "unset" }}>
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
    </>
  );
  const ScrollDownAnimationLandscape = (
    <>
      <div className="chevron-container" style={{ top: "2%" }}>
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
      <div
        className="chevron-container"
        style={{ left: "1%", top: "2%", right: "unset" }}
      >
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
    </>
  );
  if (size.width > 980) {
    return (
      <div className="App">
        <Navbar
          scrollState={scrollState}
          setPageScrollState={setPageScrollState}
        />
        {spaceBackground}
        {scrollState > -6 && ScrollDownAnimation}
        {SocialLinks}
        <ScrollPages scrollState={scrollState} />
      </div>
    );
  } else if (size.height > 500) {
    return (
      <div className="App">
        <Navbar />
        {scrollState > -6 && ScrollDownAnimation}
        {SocialLinks}
        <ScrollPages />
      </div>
    );
  } else
    return (
      <div className="App">
        <Navbar />
        {scrollState > -6 && ScrollDownAnimationLandscape}
        <ScrollPages />
      </div>
    );

}

export default App;
