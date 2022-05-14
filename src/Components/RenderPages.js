import Home from "./Home";
import IMBarber from "./IMBarber";
import Cellu from "./Cellu";
import Compound from "./Compound";
import Reveal from "react-reveal/Reveal";
import Contact from "./Contact";
import About from "./About";

export function RenderPagesOnUp(scrollState) {
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
        <Compound
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
        <Contact
          className="content-body"
          state={scrollState === -5}
          style={{ zIndex: scrollState === -5 ? 5 : 0 }}
        />
      </Reveal>
    </>
  );
}
export function RenderPagesOnDown(scrollState) {
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
        <Compound
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
        <Contact
          className="content-body"
          state={scrollState === -5}
          style={{ zIndex: scrollState === -5 ? 5 : 0 }}
        />
      </Reveal>
    </>
  );
}
