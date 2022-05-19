import Home from "./Home";
import IMBarber from "./Projects/IMBarber";
import Cellu from "./Projects/Cellu";
import Compound from "./Projects/Compound";
import Reveal from "react-reveal/Reveal";
import Contact from "./Contact";
import About from "./About";
import FiberLocator from "./Projects/FiberLocator";
import { useEffect, useRef } from "react";
import useWindowSize from "../Hooks/useWindowSize";
import PageBar from "./PageBar";

export default function Pages(props) {
  let scrollState = props.scrollState;
  const size = useWindowSize();
  const scrollRef = useRef(0);

  useEffect(() => {
    scrollRef.current = scrollState;
  }, [scrollState]);

  if (size.width < 980) return RenderPagesOnMobile;
  return (
    <div>
      {scrollRef.current < scrollState
        ? RenderPagesOnUp(scrollState)
        : RenderPagesOnDown(scrollState)}
      {PageBar(scrollState)}
    </div>
  );
}

const RenderPagesOnMobile = (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Home className="content-body-home" />
    <About className="content-body" />
    <IMBarber className="content-body" />
    <Cellu className="content-body" />
    <FiberLocator className="content-body" />
    <Compound className="content-body" />
    <Contact className="content-body" />
  </div>
);

function RenderPagesOnUp(scrollState) {
  return (
    <>
      {scrollState > -2 && (
        <Reveal
          effect="animate__animated animate__fadeInDown fadeInDown"
          effectOut="animate__animated animate__fadeOutDown"
          when={scrollState === 0}
        >
          <Home
            className="content-body"
            state={scrollState === 0}
            style={{ zIndex: scrollState === 0 ? 5 : 0 }}
          />
        </Reveal>
      )}
      <Reveal
        effect="animate__animated animate__fadeInDown fadeInDown"
        effectOut="animate__animated animate__fadeOutDown"
        when={scrollState === -1}
      >
        <About
          className="content-body"
          state={scrollState === -1}
          style={{ zIndex: scrollState === -1 ? 5 : 0 }}
        />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInDown fadeInDown"
        effectOut="animate__animated animate__fadeOutDown"
        when={scrollState === -2}
      >
        <IMBarber
          className="content-body"
          state={scrollState === -2}
          style={{ zIndex: scrollState === -2 ? 5 : 0 }}
        />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInDown fadeInDown"
        effectOut="animate__animated animate__fadeOutDown"
        when={scrollState === -3}
      >
        <Cellu
          className="content-body"
          state={scrollState === -3}
          style={{ zIndex: scrollState === -3 ? 5 : 0 }}
        />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInDown fadeInDown"
        effectOut="animate__animated animate__fadeOutDown"
        when={scrollState === -4}
      >
        <FiberLocator
          className="content-body"
          state={scrollState === -4}
          style={{ zIndex: scrollState === -4 ? 5 : 0 }}
        />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInDown fadeInDown"
        effectOut="animate__animated animate__fadeOutDown"
        when={scrollState === -5}
      >
        <Compound
          className="content-body"
          state={scrollState === -5}
          style={{ zIndex: scrollState === -5 ? 5 : 0 }}
        />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInDown fadeInDown"
        effectOut="animate__animated animate__fadeOutDown"
        when={scrollState === -6}
      >
        <Contact
          className="content-body"
          state={scrollState === -6}
          style={{ zIndex: scrollState === -6 ? 5 : 0 }}
        />
      </Reveal>
    </>
  );
}

function RenderPagesOnDown(scrollState) {
  return (
    <>
      {scrollState > -2 && (
        <Reveal
          effect="animate__animated animate__fadeInUp fadeInUp"
          effectOut="animate__animated animate__fadeOutUp"
          when={scrollState === 0}
        >
          <Home
            className="content-body"
            state={scrollState === 0}
            style={{ zIndex: scrollState === 0 ? 5 : 0 }}
          />
        </Reveal>
      )}
      <Reveal
        effect="animate__animated animate__fadeInUp fadeInUp"
        effectOut="animate__animated animate__fadeOutUp"
        when={scrollState === -1}
      >
        <About
          className="content-body"
          state={scrollState === -1}
          style={{ zIndex: scrollState === -1 ? 5 : 0 }}
        />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInUp fadeInUp"
        effectOut="animate__animated animate__fadeOutUp"
        when={scrollState === -2}
      >
        <IMBarber
          className="content-body"
          state={scrollState === -2}
          style={{ zIndex: scrollState === -2 ? 5 : 0 }}
        />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInUp fadeInUp"
        effectOut="animate__animated animate__fadeOutUp"
        when={scrollState === -3}
      >
        <Cellu
          className="content-body"
          state={scrollState === -3}
          style={{ zIndex: scrollState === -3 ? 5 : 0 }}
        />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInUp fadeInUp"
        effectOut="animate__animated animate__fadeOutUp"
        when={scrollState === -4}
      >
        <FiberLocator
          className="content-body"
          state={scrollState === -4}
          style={{ zIndex: scrollState === -4 ? 5 : 0 }}
        />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInUp fadeInUp"
        effectOut="animate__animated animate__fadeOutUp"
        when={scrollState === -5}
      >
        <Compound
          className="content-body"
          state={scrollState === -5}
          style={{ zIndex: scrollState === -5 ? 5 : 0 }}
        />
      </Reveal>
      <Reveal
        effect="animate__animated animate__fadeInUp fadeInUp"
        effectOut="animate__animated animate__fadeOutUp"
        when={scrollState === -6}
      >
        <Contact
          className="content-body"
          state={scrollState === -6}
          style={{ zIndex: scrollState === -6 ? 5 : 0 }}
        />
      </Reveal>
    </>
  );
}
