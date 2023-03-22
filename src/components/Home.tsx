import { useContext, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { LanguageContext } from '../context/LanguageContext'
import { BorderLightButton } from './BorderLightButton'
import { Title } from './Title'
import smallProfilePhoto from '../images/profile-photo-450w.png'
import bigProfilePhoto from '../images/profile-photo-750w.png'

type Props = {
  leftButtonHandler: () => void
  rightButtonHandler: () => void
  bottomButtonHandler: () => void
  isOpeningAbout: boolean
  isOpeningProjects: boolean
  isOpeningContact: boolean
}

export const Home = ({
  leftButtonHandler,
  rightButtonHandler,
  bottomButtonHandler,
  isOpeningAbout,
  isOpeningProjects,
  isOpeningContact,
}: Props) => {
  const language = useContext(LanguageContext).userLanguage
  const dictionary = useContext(LanguageContext).dictionary
  const swipeHandlers = useSwipeable({
    onSwipedRight: leftButtonHandler,
    onSwipedLeft: rightButtonHandler,
    onSwipedUp: bottomButtonHandler,
    swipeDuration: 500,
  })

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({
      x: Math.round(event.clientX - window.innerWidth / 2),
      y: Math.round(event.clientY - window.innerHeight / 2),
    })
  }

  return (
    <div
      className="h-full flex flex-col relative justify-center gap-3 text-center text-white select-none"
      {...swipeHandlers}
      onMouseMove={handleMouseMove}
    >
      <img
        style={{
          position: 'absolute',
          bottom: -mousePosition.y / 150,
          left: mousePosition.x / 150,
          transitionProperty: 'all',
          transitionDuration: '1s',
          transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        }}
        className="grayscale opacity-50 brightness-90 hover:opacity-75 hover:brightness-100 hover:grayscale-0"
        srcSet={`${smallProfilePhoto} 450w, ${bigProfilePhoto} 750w`}
        sizes="(max-width: 1280px) 450px, 750px"
        src={bigProfilePhoto}
        alt={'Profile'}
      />
      <Title
        style={{
          position: 'relative',
          top: -mousePosition.y / 50,
          left: -mousePosition.x / 50,
          transitionProperty: 'top, left',
          transitionDuration: '1s',
          transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        }}
        title="Ignacio Schonfeld"
        subtitle={dictionary.SUBTITLE}
        language={language}
      />
      <BorderLightButton
        text={dictionary.navButtons.ABOUT}
        position="left"
        isActive={isOpeningAbout}
        onClick={leftButtonHandler}
      />
      <BorderLightButton
        text={dictionary.navButtons.PROJECTS}
        position="bottom"
        isActive={isOpeningProjects}
        onClick={bottomButtonHandler}
      />
      <BorderLightButton
        text={dictionary.navButtons.CONTACT}
        position="right"
        isActive={isOpeningContact}
        onClick={rightButtonHandler}
      />
    </div>
  )
}
