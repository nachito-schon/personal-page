import { useSwipeable } from 'react-swipeable'
import { BorderLightButton } from './BorderLightButton'

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
  const swipeHandlers = useSwipeable({
    onSwipedRight: leftButtonHandler,
    onSwipedLeft: rightButtonHandler,
    onSwipedUp: bottomButtonHandler,
  })

  return (
    <div
      className="h-full flex flex-col relative justify-center gap-3 text-center text-white select-none"
      {...swipeHandlers}
    >
      <h1 className="text-7xl tracking-wide ">Ignacio Schonfeld</h1>
      <h2 className="text-4xl font-play-bold tracking-widest">
        FRONT-END DEVELOPER
      </h2>
      <BorderLightButton
        text="ABOUT ME"
        position="left"
        isActive={isOpeningAbout}
        onClick={leftButtonHandler}
      />
      <BorderLightButton
        text="PROJECTS"
        position="bottom"
        isActive={isOpeningProjects}
        onClick={bottomButtonHandler}
      />
      <BorderLightButton
        text="CONTACT"
        position="right"
        isActive={isOpeningContact}
        onClick={rightButtonHandler}
      />
    </div>
  )
}
