import Home from "./Home";
import Reveal from "react-reveal/Reveal";
import Contact from "./Contact";
import About from "./About";
import { useEffect, useRef } from "react";
import useWindowSize from "../Hooks/useWindowSize";
import PageBar from "./PageBar";
import ProjectsGallery from "./Projects/ProjectsGallery";

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
    <ProjectsGallery className="content-body" />
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
        <ProjectsGallery
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
        <Contact
          className="content-body"
          state={scrollState === -3}
          style={{ zIndex: scrollState === -3 ? 5 : 0 }}
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
        <ProjectsGallery
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
        <Contact
          className="content-body"
          state={scrollState === -3}
          style={{ zIndex: scrollState === -3 ? 5 : 0 }}
        />
      </Reveal>
    </>
  );
}
