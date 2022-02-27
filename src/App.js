import React, { useEffect, useState, useRef } from 'react'
import logo from './logo.svg'
import './App.css'
import '@fontsource/encode-sans-sc/700.css'
import '@fontsource/encode-sans/700.css'
import Zoom from 'react-reveal/Zoom'
import HorizontalScroll from 'react-scroll-horizontal'
import useScrollState from './Hooks/useScrollState'
import Home from './Components/Home'
import Techstore from './Components/Techstore'
import Cellu from './Components/Cellu'
import Fiber from './Components/Fiber'

const PAGENUM = 4;
function App () {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollRef = useRef(0)
  const scrollState = useScrollState(PAGENUM)
  const trailRefs = useRef([]);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const rAFIndex = useRef(0);
  const [isDragging, setIsDragging] = useState(1);




  useEffect(() => {
    console.log(scrollState)
    scrollRef.current = scrollState
  }, [scrollState])


  function registerMousePosition({ clientX, clientY }) {
    lastMousePosition.current.x = clientX;
    lastMousePosition.current.y = clientY;
  }

  function drawCircles() {
    for (let i = 0; i < 60; i++) {
      trailRefs.current.push(React.createRef());
    }

    return [...Array(60)].map((item, index) => {
      const ease = index * 0.005;
      return (
        <div
          style={{ position: "absolute", transition: `transform ${ease}s`, color: "red", fontSize: "20px" }}
          ref={trailRefs.current[index]}
        >
AB
        </div>
      );
    });
  }

  function updateCollectedLettersPosition() {
    for (let i = 0; i < 60; i++) {
      const xpos = lastMousePosition.current.x;
      const ypos = lastMousePosition.current.y;
      const ease = i * 0.005;
      trailRefs.current[
        i
      ].current.style.transform = `translate(${xpos-20}px, ${ypos-120}px)`;
    }
  }

  useEffect(() => {
    function update() {
      if (isDragging) {
        rAFIndex.current = requestAnimationFrame(update);
      }
      updateCollectedLettersPosition();
    }

    // cancel the existing rAF
    cancelAnimationFrame(rAFIndex.current);

    document.addEventListener("mousemove", registerMousePosition);
    rAFIndex.current = requestAnimationFrame(update);

    return () => {
      document.removeEventListener("mousemove", registerMousePosition);
    };
  }, [isDragging]);


  const renderPages = () => {
    let i = scrollState - scrollRef.current
    switch (scrollState) {
      case 0:
        return (
          <>
            <Home className='content custom-animation-white' />
            <Techstore className='content animation-horizontal' />
          </>
        )
        break
      case 1:
        if (i > 0) {
          return (
            <>
              <Home className='content animation-horizontal' />
              <Techstore className='content-body custom-animation-white' />
            </>
          )
        } else
          return (
            <>
              <Techstore className='content custom-animation-white' />
            </>
          )

        break
      case 2:
        if (i > 0) {
          return (
            <>
              <Techstore className='content animation-horizontal' />
              <Cellu className='content-body custom-animation-white' />
            </>
          )
        } else
          return (
            <>
              <Cellu className='content custom-animation-white' />
            </>
          )

        break
      case 3:
        if (i > 0) {
          return (
            <>
              <Cellu className='content animation-horizontal' />
              <Fiber className='content-body custom-animation-white' />
            </>
          )
        } else
          return (
            <>
              <Fiber className='content custom-animation-white' />
            </>
          )

        break
    }
  }
  return (
    <div className='bg'>
      <header className='header'>
        <h3 className='title custom-animation-gradient'>Alon Barenboim</h3>
        <button className='btn custom-animation-white'>Portfolio</button>
        <button className='btn custom-animation-white'>About Me</button>
        <button className='btn custom-animation-white'>Contact</button>
      </header>
      {/* <Zoom> */}
      {renderPages()}
      {drawCircles()}

      {/* </Zoom> */}
      <footer className='footer'>
        <p>
          <span className={scrollState == 0 ? 'horizontal-line-scope' : 'horizontal-line'}>___</span>
          <span className={scrollState == 1 ? 'horizontal-line-scope' : 'horizontal-line'}>___</span>
          <span className={scrollState == 2 ? 'horizontal-line-scope' : 'horizontal-line'}>___</span>
          <span className={scrollState == 3 ? 'horizontal-line-scope' : 'horizontal-line'}>___</span>
        </p>
      </footer>
    </div>
  )
}

export default App
