import { useContext, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { LanguageContext } from '../context/LanguageContext'
import { BorderLightButton } from './BorderLightButton'
import { Title } from './Title'

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
  const dictionary = useContext(LanguageContext).dictionary
  const swipeHandlers = useSwipeable({
    onSwipedRight: leftButtonHandler,
    onSwipedLeft: rightButtonHandler,
    onSwipedUp: bottomButtonHandler,
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
