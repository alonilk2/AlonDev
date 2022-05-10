import Home from "./Home";
import IMBarber from "./IMBarber";
import Cellu from "./Cellu";
import Compound from "./Compound";
import Reveal from "react-reveal/Reveal";
import Contact from "./Contact";

export function RenderPagesOnUp(scrollState) {
  return (
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
}
export function RenderPagesOnDown(scrollState) {
  return (
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
}
