import { useState, useEffect, useRef } from "react";

function useScrollState(PAGENUM) {
  const [pageScrollState, setPageScrollState] = useState(0);
  const limitSensitivity = useRef(false);
  const handleScroll = (e) => {
    if (!limitSensitivity.current) {
      limitSensitivity.current = true;
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

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return [pageScrollState, setPageScrollState];
}

export default useScrollState;
