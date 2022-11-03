import { useState } from 'react'
import { About } from './components/About'
import { Home } from './components/Home'

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isHomeOpen, setIsHomeOpen] = useState(true)
  const [isSlidingRight, setIsSlidingRight] = useState(false)
  const [isSlidingLeft, setIsSlidingLeft] = useState(false)

  const openAbout = () => {
    setIsAboutOpen(true)
    setIsSlidingRight(true)
    setTimeout(() => {
      setIsSlidingRight(false)
      setIsHomeOpen(false)
    }, 500)
  }

  const closeAbout = () => {
    setIsHomeOpen(true)
    setIsSlidingLeft(true)
    setTimeout(() => {
      setIsSlidingLeft(false)
      setIsAboutOpen(false)
    }, 500)
  }

  return (
    <div
      style={
        isAboutOpen && isHomeOpen ? { right: `${window.innerWidth}px` } : {}
      }
      className={`flex w-screen h-screen relative transition bg-neutral-300 ${
        isSlidingRight ? 'slide-right' : ''
      } ${isSlidingLeft ? 'slide-left' : ''}`}
    >
      {isAboutOpen ? (
        <div
          style={
            isSlidingRight || isSlidingLeft
              ? { minWidth: `${window.innerWidth}px` }
              : { minWidth: '100%' }
          }
        >
          <About buttonHandler={closeAbout} />
        </div>
      ) : null}
      {isHomeOpen ? (
        <div
          style={
            isSlidingRight || isSlidingLeft
              ? { minWidth: `${window.innerWidth}px` }
              : { minWidth: '100%' }
          }
        >
          <Home rightButtonHandler={openAbout} />
        </div>
      ) : null}
    </div>
  )
}

export default App
