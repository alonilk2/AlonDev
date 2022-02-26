import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import '@fontsource/encode-sans-sc/700.css'
import '@fontsource/encode-sans/700.css'
import Zoom from 'react-reveal/Zoom'
import HorizontalScroll from 'react-scroll-horizontal'

function App () {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [pageScrollState, setPageScrollState] = useState(0)

  const handleScroll = e => {
    console.log(e.deltaY)
    if (e.deltaY > 0) setPageScrollState(pageScrollState => pageScrollState - 1)
    else setPageScrollState(pageScrollState => pageScrollState + 1)
  }

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])

  useEffect(() => {
    console.log(pageScrollState)
  }, [pageScrollState])

  const renderPages = () => {
    switch (pageScrollState) {
      case 0:
        return (
          <section className='content custom-animation-white'>
            <div className='content-body'>
              <h1 className='content-title delay-1'>Software Engineer</h1>
              <h1 className='content-title-2 full-stack custom-animation-gradient delay-2'>
                Full-Stack
              </h1>
              <h1 className='content-title-2 developer custom-animation-white delay-1'>
                {' '}
                Developer
              </h1>
            </div>
          </section>
        )
        break
      case 1:
        return (
          <section className='content animation-horizontal'>
            <div className='content-body'>
              <h1 className='content-title custom-animation-white delay-1'>
                Software Engineer
              </h1>
              <h1 className='content-title-2 full-stack custom-animation-gradient delay-2'>
                Full-Stack
              </h1>
              <h1 className='content-title-2 developer custom-animation-white delay-1'>
                {' '}
                Developer
              </h1>
            </div>
          </section>
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
        <p>This is the footer.</p>
      </footer>
    </div>
  )
}

export default App
