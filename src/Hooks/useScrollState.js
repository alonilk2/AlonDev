import React, { useState, useEffect } from 'react'

function useScrollState (PAGENUM) {
  const [pageScrollState, setPageScrollState] = useState(0)

  const handleScroll = e => {
    if (e.deltaY > 0)
      setPageScrollState(pageScrollState =>
        pageScrollState > 0 ? pageScrollState - 1 : pageScrollState
      )
    else
      setPageScrollState(pageScrollState =>
        pageScrollState < PAGENUM-1 ? pageScrollState + 1 : pageScrollState
      )
  }
  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])

  return pageScrollState
}

export default useScrollState
