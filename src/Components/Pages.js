import { useEffect, useRef } from "react";
import { RenderPagesOnUp, RenderPagesOnDown } from "./RenderPages";
import useWindowSize from "../Hooks/useWindowSize";
import PageBar from "../Components/PageBar";
import Home from "../Components/Home";
import IMBarber from "../Components/IMBarber";
import Cellu from "../Components/Cellu";
import Compound from "../Components/Compound";
import FiberLocator from "../Components/FiberLocator";
import Contact from "../Components/Contact";


const RenderPagesOnMobile = (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Home className="content-body-home" />
    <IMBarber className="content-body" />
    <Cellu className="content-body" />
    <FiberLocator className="content-body" />

    <Compound className="content-body" />
    <Contact className="content-body" />
  </div>
);

export default function Pages(props) {
  let scrollState = props.scrollState;
  const size = useWindowSize();
  const scrollRef = useRef(0);

  useEffect(() => {
    scrollRef.current = scrollState;
  }, [scrollState]);

  if (size.width < 768) return RenderPagesOnMobile;
  return (
    <div>
      {scrollRef.current < scrollState
        ? RenderPagesOnUp(scrollState)
        : RenderPagesOnDown(scrollState)}
      {PageBar(scrollState)}
    </div>
  );
}
