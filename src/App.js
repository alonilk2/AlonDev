import { useEffect, useRef } from "react";
import useScrollState from "./Hooks/useScrollState";
import Home from "./Components/Home";
import IMBarber from "./Components/IMBarber";
import Cellu from "./Components/Cellu";
import Compound from "./Components/Compound";
import Menu from "./Components/MenuComponent";
import useWindowSize from "./Hooks/useWindowSize";
import useSpace from "./Hooks/useSpace";
import Reveal from "react-reveal/Reveal";
import PageBar from "./Components/PageBar";
import "./App.css";
import "@fontsource/encode-sans-sc/700.css";
import "@fontsource/encode-sans/700.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PAGENUM = 3;

const Pages = () => {
  const scrollState = useScrollState(PAGENUM);
  const size = useWindowSize();
  const scrollRef = useRef(0);

  useEffect(() => {
    scrollRef.current = scrollState;
  }, [scrollState]);

  const RenderPagesOnMobile = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Reveal
        effect="animate__animated animate__fadeInDown fadeInDown"
        effectOut="animate__animated animate__fadeOutDown"
      >
        <Home className="content-body-home" />
        <IMBarber className="content-body" />
        <Cellu className="content-body" />
        <Compound className="content-body" />
      </Reveal>
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
  return (
    <div className="App">
      <Menu />
      {useSpace()}
      <Pages />
    </div>
  );
}

export default App;
