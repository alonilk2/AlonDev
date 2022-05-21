import { useState, useEffect, useRef } from "react";

function useScrollState(PAGENUM) {
  const [pageScrollState, setPageScrollState] = useState(0);
  const [pageScrollStateMobile, setPageScrollStateMobile] = useState(0);

  const limitSensitivity = useRef(false);
  const handleScroll = (e) => {
    if (!limitSensitivity.current) {
      limitSensitivity.current = true;
      console.log(e.deltaY)
      if (e.deltaY > 0)
        setPageScrollState((pageScrollState) =>
          pageScrollState > -PAGENUM ? pageScrollState - 1 : pageScrollState
        );
      else
        setPageScrollState((pageScrollState) =>
          pageScrollState < 0 ? pageScrollState + 1 : pageScrollState
        );
    }
    setTimeout(() => {
      limitSensitivity.current = false;
    }, 800);
  };
  const handleScrollMobile = (e) => {
    setPageScrollStateMobile(e.target.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScrollMobile, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.addEventListener("scroll", handleScrollMobile);

    };
  }, []);

  return [pageScrollState, setPageScrollState, pageScrollStateMobile];
}

export default useScrollState;
