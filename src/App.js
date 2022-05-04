import React, {
  useEffect,
  useState,
  Suspense,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
import logo from "./logo.svg";
import "./App.css";
import "@fontsource/encode-sans-sc/700.css";
import "@fontsource/encode-sans/700.css";
import HorizontalScroll from "react-scroll-horizontal";
import useScrollState from "./Hooks/useScrollState";
import Home from "./Components/Home";
import IMBarber from "./Components/IMBarber";
import Cellu from "./Components/Cellu";
import Compound from "./Components/Compound";
import Slide from "react-reveal/Slide";
import Menu from "./Components/MenuComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import useWindowSize from "./Hooks/useWindowSize";
import useSpace from "./Hooks/useSpace";
import Reveal from "react-reveal/Reveal";
let show = [true, false, false, false];

const PAGENUM = 3;

const Pages = () => {
  const scrollState = useScrollState(PAGENUM);
  const size = useWindowSize();
  const scrollRef = useRef(0);

  useEffect(() => {
    show[scrollState] = !show[scrollState];
    show[scrollRef.current] = !show[scrollRef.current];

    // setShow(showTemp)
    scrollRef.current = scrollState;
  }, [scrollState]);

  return (
    <div>
      {scrollRef.current < scrollState ? (
        <>
          <Reveal
            effect="animate__animated animate__fadeInUp fadeInUp"
            effectOut="animate__animated animate__fadeOutLeft"
            when={scrollState === 0}
          >
            <Home className="content-body" />
          </Reveal>
          <Reveal
            effect="animate__animated animate__fadeInUp fadeInUp"
            effectOut="animate__animated animate__fadeOutLeft"
            when={scrollState === -1}
          >
            <IMBarber className="content-body" state={scrollState === -1} />
          </Reveal>
          <Reveal
            effect="animate__animated animate__fadeInUp fadeInUp"
            effectOut="animate__animated animate__fadeOutLeft"
            when={scrollState === -2}
          >
            <Cellu className="content-body" state={scrollState === -2} />
          </Reveal>
          <Reveal
            effect="animate__animated animate__fadeInUp fadeInUp"
            effectOut="animate__animated animate__fadeOutLeft"
            when={scrollState === -3}
          >
            <Compound className="content-body" state={scrollState === -3} />
          </Reveal>
        </>
      ) : (
        <>
          <Reveal
            effect="animate__animated animate__fadeInUp fadeInUp"
            effectOut="animate__animated animate__fadeOutLeft"
            when={scrollState === 0}
          >
            <Home className="content-body" />
          </Reveal>
          <Reveal
            effect="animate__animated animate__fadeInUp fadeInUp"
            effectOut="animate__animated animate__fadeOutLeft"
            when={scrollState === -1}
          >
            <IMBarber className="content-body" state={scrollState === -1} />
          </Reveal>
          <Reveal
            effect="animate__animated animate__fadeInUp fadeInUp"
            effectOut="animate__animated animate__fadeOutLeft"
            when={scrollState === -2}
          >
            <Cellu className="content-body" state={scrollState === -2} />
          </Reveal>
          <Reveal
            effect="animate__animated animate__fadeInUp fadeInUp"
            effectOut="animate__animated animate__fadeOutLeft"
            when={scrollState === -3}
          >
            <Compound className="content-body" state={scrollState === -3} />
          </Reveal>
        </>
      )}

      {size.width > 768 && (
        <footer className="footer">
          <p className="footer-p">
            <span
              className={
                scrollState == 0 ? "horizontal-line-scope" : "horizontal-line"
              }
            >
              ___
            </span>
            <span
              className={
                scrollState == -1 ? "horizontal-line-scope" : "horizontal-line"
              }
            >
              ___
            </span>
            <span
              className={
                scrollState == -2 ? "horizontal-line-scope" : "horizontal-line"
              }
            >
              ___
            </span>
            <span
              className={
                scrollState == -3 ? "horizontal-line-scope" : "horizontal-line"
              }
            >
              ___
            </span>
          </p>
        </footer>
      )}
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
