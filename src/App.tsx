import { useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { LanguageSelector } from './components/LanguageSelector'
import { Projects } from './components/Projects'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isHomeOpen, setIsHomeOpen] = useState(true)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [isSlidingRight, setIsSlidingRight] = useState(false)
  const [isSlidingLeft, setIsSlidingLeft] = useState(false)
  const [isSlidingUp, setIsSlidingUp] = useState(false)
  const [isSlidingDown, setIsSlidingDown] = useState(false)

  const openAbout = () => {
    setIsAboutOpen(true)
    setIsSlidingRight(true)
    setTimeout(() => {
      setIsSlidingRight(false)
      setIsHomeOpen(false)
    }, 750)
  }

  const closeAbout = () => {
    setIsHomeOpen(true)
    setIsSlidingLeft(true)
    setTimeout(() => {
      setIsSlidingLeft(false)
      setIsAboutOpen(false)
    }, 750)
  }

  const openContact = () => {
    setIsContactOpen(true)
    setIsSlidingLeft(true)
    setTimeout(() => {
      setIsSlidingLeft(false)
      setIsHomeOpen(false)
    }, 750)
  }

  const closeContact = () => {
    setIsHomeOpen(true)
    setIsSlidingRight(true)
    setTimeout(() => {
      setIsSlidingRight(false)
      setIsContactOpen(false)
    }, 750)
  }

  const openProjects = () => {
    setIsProjectsOpen(true)
    setIsSlidingUp(true)
    setTimeout(() => {
      setIsSlidingUp(false)
      setIsHomeOpen(false)
    }, 750)
  }

  const closeProjects = () => {
    setIsHomeOpen(true)
    setIsSlidingDown(true)
    setTimeout(() => {
      setIsSlidingDown(false)
      setIsProjectsOpen(false)
    }, 750)
  }

  return (
    <LanguageProvider>
      <div className="overflow-hidden bg-dark-green">
        <div
          style={
            isSlidingRight || isSlidingLeft
              ? { right: `${window.innerWidth}px` }
              : isSlidingUp || isSlidingDown
              ? { bottom: `${window.innerHeight}px` }
              : {}
          }
          className={`flex w-screen h-screen relative font-sans font-bold 2xl:font-thin selection:bg-bright-green selection:text-black ${
            isSlidingRight ? 'slide-right' : ''
          }${isSlidingLeft ? 'slide-left' : ''}${
            isSlidingUp ? 'flex-col slide-up' : ''
          }${isSlidingDown ? 'flex-col slide-down' : ''}`}
        >
          {isAboutOpen ? (
            <div
              style={
                isSlidingRight || isSlidingLeft
                  ? { minWidth: `${window.innerWidth}px` }
                  : { minWidth: '100%' }
              }
            >
              <About buttonHandler={closeAbout} isSliding={isHomeOpen} />
            </div>
          ) : null}
          {isHomeOpen ? (
            <div
              style={
                isSlidingRight || isSlidingLeft
                  ? { minWidth: `${window.innerWidth}px` }
                  : isSlidingUp || isSlidingDown
                  ? { minHeight: `${window.innerHeight}px` }
                  : { minWidth: '100%', minHeight: '100%' }
              }
            >
              <Home
                leftButtonHandler={openAbout}
                rightButtonHandler={openContact}
                bottomButtonHandler={openProjects}
                isOpeningAbout={isAboutOpen}
                isOpeningProjects={isProjectsOpen}
                isOpeningContact={isContactOpen}
              />
            </div>
          ) : null}
          {isContactOpen ? (
            <div
              style={
                isSlidingRight || isSlidingLeft
                  ? { minWidth: `${window.innerWidth}px` }
                  : { minWidth: '100%' }
              }
            >
              <Contact buttonHandler={closeContact} isSliding={isHomeOpen} />
            </div>
          ) : null}
          {isProjectsOpen ? (
            <div
              style={
                isSlidingUp || isSlidingDown
                  ? { minHeight: `${window.innerHeight}px` }
                  : { minHeight: '100%', minWidth: '100%' }
              }
            >
              <Projects buttonHandler={closeProjects} isSliding={isHomeOpen} />
            </div>
          ) : null}
        </div>
        <LanguageSelector className="fixed top-0 right-0 mt-3 mr-6 md:mt-6 md:mr-12 xl:mt-12 xl:mr-24 z-50" />
      </div>
    </LanguageProvider>
  )
}

export default App
