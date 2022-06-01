import useScrollState from "./Hooks/useScrollState";
import Navbar from "./Components/Navbar";
import useWindowSize from "./Hooks/useWindowSize";
import useSpace from "./Hooks/useSpace";
import ScrollPages from "./Components/ScrollPages";
import "./App.css";
import "@fontsource/encode-sans-sc/700.css";
import "@fontsource/encode-sans/700.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import Fade from "react-reveal/Fade";

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
        <div className="social-links">
          <a href={"https://www.linkedin.com/in/alonbar1/"}>
            <FaLinkedinIn style={{ margin: "5px 0" }} />
          </a>
          <a href={"https://github.com/alonilk2"}>
            <FaGithub style={{ margin: "5px 0" }} />
          </a>
          <a href={"https://stackoverflow.com/users/9691776/alon-barenboim"}>
            <FaStackOverflow style={{ margin: "5px 0" }} />
          </a>
        </div>
        <ScrollPages scrollState={scrollState} />
      </div>
    );
  } else if (size.height > 500) {
    return (
      <div className="App">
        <Navbar />
        {scrollState > -6 && ScrollDownAnimation}
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
