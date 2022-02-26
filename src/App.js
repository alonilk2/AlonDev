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

  useEffect(() => {
    console.log(scrollState)
    scrollRef.current = scrollState
  }, [scrollState])

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
        <button className='btn custom-animation-white'>Projects</button>
        <button className='btn custom-animation-white'>About Me</button>
        <button className='btn custom-animation-white'>Contact</button>
      </header>
      {/* <Zoom> */}
      {renderPages()}

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
