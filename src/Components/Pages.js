import { useEffect, useRef } from "react";
import { RenderPagesOnUp, RenderPagesOnDown } from "./RenderPages";
import useWindowSize from "../Hooks/useWindowSize";
import PageBar from "../Components/PageBar";
import { RenderPagesOnMobile } from "../App";

export default function Pages(props){
  let scrollState = props.scrollState;
  const size = useWindowSize();
  const scrollRef = useRef(0);

  useEffect(() => {
    scrollRef.current = scrollState;
  }, [scrollState]);

  if (size.width < 768)
    return RenderPagesOnMobile;
  return (
    <div>
      {scrollRef.current < scrollState
        ? RenderPagesOnUp(scrollState)
        : RenderPagesOnDown(scrollState)}
      {PageBar(scrollState)}
    </div>
  );
};
