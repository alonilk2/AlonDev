import useScrollState from "./Hooks/useScrollState";
import Navbar from "./Components/Navbar";
import useWindowSize from "./Hooks/useWindowSize";
import ScrollPages from "./Components/ScrollPages";
import "./App.css";
import "@fontsource/encode-sans-sc/700.css";
import "@fontsource/encode-sans/700.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialLinks } from "./Components/SocialLinks";
import { ScrollDownAnimation, ScrollDownAnimationLandscape } from "./Utils";
const PAGENUM = 3;

function App() {
  const [scrollState, setPageScrollState] = useScrollState(PAGENUM);
  const size = useWindowSize();

  if (size.width > 980) {
    return (
      <div className="App">
        <div
          className="circle-1"
          style={{ top: 60 + scrollState * 80 + "%" }}
        />
        <Navbar
          scrollState={scrollState}
          setPageScrollState={setPageScrollState}
        />
        {scrollState > -8 && ScrollDownAnimation}
        {SocialLinks}
        <ScrollPages scrollState={scrollState} />
      </div>
    );
  } else if (size.height > 500) {
    return (
      <div className="App">

        <div
          className="circle-1"
        />
        <Navbar />
        {scrollState > -8 && ScrollDownAnimation}
        {SocialLinks}
        <ScrollPages />
      </div>
    );
  } else
    return (
      <div className="App">

        <div
          className="circle-1"
          style={{ top: 60 + scrollState * 80 + "%" }}
        />
        <Navbar />
        {scrollState > -8 && ScrollDownAnimationLandscape}
        <ScrollPages />
      </div>
    );
}

export default App;
