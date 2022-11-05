type Props = {
  leftButtonHandler: () => void
  rightButtonHandler: () => void
  bottomButtonHandler: () => void
}

export const Home = ({
  leftButtonHandler,
  rightButtonHandler,
  bottomButtonHandler,
}: Props) => {
  return (
    <div className="h-full flex flex-col relative justify-center gap-3 bg-black text-center text-white">
      <h1 className="text-6xl">Ignacio Schonfeld</h1>
      <h2 className="text-3xl tracking-wider">FULL-STACK DEVELOPER</h2>
      <div className="absolute top-0 left-0 w-1/6 h-full z-20 cursor-pointer">
        <div className="absolute w-full h-full left-gradient opacity-0 hover:opacity-50 transition duration-700"></div>
        <button onClick={leftButtonHandler} className="w-full h-full">
          ABOUT ME
        </button>
      </div>
      <button
        onClick={bottomButtonHandler}
        className="absolute bottom-0 h-1/6 w-full z-10"
      >
        PROJECTS
      </button>
      <button
        onClick={rightButtonHandler}
        className="absolute top-0 right-0 w-1/6 h-full z-20"
      >
        CONTACT
      </button>
    </div>
  )
}
