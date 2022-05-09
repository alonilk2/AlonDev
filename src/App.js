import { useEffect, useRef } from "react";
import useScrollState from "./Hooks/useScrollState";
import Home from "./Components/Home";
import IMBarber from "./Components/IMBarber";
import Cellu from "./Components/Cellu";
import Compound from "./Components/Compound";
import Navbar from "./Components/Navbar";
import useWindowSize from "./Hooks/useWindowSize";
import useSpace from "./Hooks/useSpace";
import Reveal from "react-reveal/Reveal";
import PageBar from "./Components/PageBar";
import Contact from "./Components/Contact";
import "./App.css";
import "@fontsource/encode-sans-sc/700.css";
import "@fontsource/encode-sans/700.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PAGENUM = 4;

const Pages = (props) => {
  let scrollState = props.scrollState;
  const size = useWindowSize();
  const scrollRef = useRef(0);

  useEffect(() => {
    scrollRef.current = scrollState;
  }, [scrollState]);

  useEffect(() => {
    console.log("rerender");
  });
  
  const RenderPagesOnMobile = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Home className="content-body-home" />
      <IMBarber className="content-body" />
      <Cellu className="content-body" />
      <Compound className="content-body" />
      <Contact className="content-body" />
    </div>
  );

  const RenderPagesOnUp = (
    <>
      <Reveal
        effect="animate__animated animate__fadeInDown fadeInDown"
        effectOut="animate__animated animate__fadeOutDown"
        when={scrollState === 0}
      >
        <Home className="content-body" state={scrollState === 0} />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInDown fadeInDown"
        effectOut="animate__animated animate__fadeOutDown"
        when={scrollState === -1}
      >
        <IMBarber className="content-body" state={scrollState === -1} />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInDown fadeInDown"
        effectOut="animate__animated animate__fadeOutDown"
        when={scrollState === -2}
      >
        <Cellu className="content-body" state={scrollState === -2} />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInDown fadeInDown"
        effectOut="animate__animated animate__fadeOutDown"
        when={scrollState === -3}
      >
        <Compound className="content-body" state={scrollState === -3} />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInDown fadeInDown"
        effectOut="animate__animated animate__fadeOutDown"
        when={scrollState === -4}
      >
        <Contact className="content-body" state={scrollState === -4} />
      </Reveal>
    </>
  );

  const RenderPagesOnDown = (
    <>
      <Reveal
        effect="animate__animated animate__fadeInUp fadeInUp"
        effectOut="animate__animated animate__fadeOutUp"
        when={scrollState === 0}
      >
        <Home className="content-body" state={scrollState === 0} />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInUp fadeInUp"
        effectOut="animate__animated animate__fadeOutUp"
        when={scrollState === -1}
      >
        <IMBarber className="content-body" state={scrollState === -1} />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInUp fadeInUp"
        effectOut="animate__animated animate__fadeOutUp"
        when={scrollState === -2}
      >
        <Cellu className="content-body" state={scrollState === -2} />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInUp fadeInUp"
        effectOut="animate__animated animate__fadeOutUp"
        when={scrollState === -3}
      >
        <Compound className="content-body" state={scrollState === -3} />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInUp fadeInUp"
        effectOut="animate__animated animate__fadeOutUp"
        when={scrollState === -4}
      >
        <Contact className="content-body" state={scrollState === -4} />
      </Reveal>
    </>
  );

  if (size.width < 768) return RenderPagesOnMobile;
  return (
    <div>
      {scrollRef.current < scrollState ? RenderPagesOnUp : RenderPagesOnDown}
      {PageBar(scrollState)}
    </div>
  );
};

function App() {
  const scrollState = useScrollState(PAGENUM);
  const size = useWindowSize();
  const spaceBackground = useSpace();
  if (size.width > 768){
    return (
      <div className="App">
        <Navbar scrollState={scrollState} />
        {spaceBackground}
        <Pages scrollState={scrollState} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        {spaceBackground}
        <Pages />
      </div>
    );
  }

}

export default App;
