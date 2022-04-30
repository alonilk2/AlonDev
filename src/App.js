import React, {
  useEffect,
  useState,
  Suspense,
  useRef,
  useCallback,
  useLayoutEffect
} from 'react'
import logo from './logo.svg'
import './App.css'
import '@fontsource/encode-sans-sc/700.css'
import '@fontsource/encode-sans/700.css'
import HorizontalScroll from 'react-scroll-horizontal'
import useScrollState from './Hooks/useScrollState'
import Home from './Components/Home'
import Techstore from './Components/Techstore'
import Cellu from './Components/Cellu'
import Compound from './Components/Compound'
import Box from './Components/Box'
import Slide from 'react-reveal/Slide'
import Menu from './Components/MenuComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import useWindowSize from './Hooks/useWindowSize'
import useSpace from './Hooks/useSpace'
import Fade from 'react-reveal/Fade'
let show = [true, false, false, false]

const PAGENUM = 4

const Pages = () => {
  const scrollState = useScrollState(PAGENUM)
  const size = useWindowSize()
  const scrollRef = useRef(0)

  useEffect(() => {
    show[scrollState] = !show[scrollState]
    show[scrollRef.current] = !show[scrollRef.current]

    // setShow(showTemp)
    scrollRef.current = scrollState
  }, [scrollState])

  return (
    <div>
      {scrollRef.current < scrollState ? (
        <>
          <Fade top opposite when={scrollState === 0}>
            <Home className='content-body' style={{ overflow: 'hidden' }} />
          </Fade>
          <Fade top opposite when={scrollState === -1}>
            <Techstore
              className='content-body'
              style={{ overflow: 'hidden' }}
            />
          </Fade>
          <Fade top opposite when={scrollState === -2}>
            <Cellu className='content-body' style={{ overflow: 'hidden' }} />
          </Fade>
          <Fade top opposite when={scrollState === -3}>
            <h1>ABC</h1>
          </Fade>
        </>
      ) : (
        <>
          <Fade bottom opposite when={scrollState === 0}>
            <Home className='content-body' style={{ overflow: 'hidden' }} />
          </Fade>
          <Fade bottom opposite when={scrollState === -1}>
            <Techstore
              className='content-body'
              style={{ overflow: 'hidden' }}
            />
          </Fade>
          <Fade bottom opposite when={scrollState === -2}>
            <Cellu className='content-body' style={{ overflow: 'hidden' }} />
          </Fade>
          <Fade bottom opposite when={scrollState === -3}>
            <Compound className='content-body' style={{ overflow: 'hidden' }} />
          </Fade>
        </>
      )}

      {size.width > 768 && (
        <footer className='footer'>
          <p className='footer-p'>
            <span
              className={
                scrollState == 0 ? 'horizontal-line-scope' : 'horizontal-line'
              }
            >
              ___
            </span>
            <span
              className={
                scrollState == -1 ? 'horizontal-line-scope' : 'horizontal-line'
              }
            >
              ___
            </span>
            <span
              className={
                scrollState == -2 ? 'horizontal-line-scope' : 'horizontal-line'
              }
            >
              ___
            </span>
            <span
              className={
                scrollState == -3 ? 'horizontal-line-scope' : 'horizontal-line'
              }
            >
              ___
            </span>
          </p>
        </footer>
      )}
    </div>
  )
}
function App () {
  return (
    <div className='App'>
      <Menu />
      {useSpace()}
      <Pages />
    </div>
  )
}

export default App
