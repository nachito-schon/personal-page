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
      <div
        onClick={leftButtonHandler}
        className="group absolute top-0 left-0 w-1/6 h-full z-20 cursor-pointer"
      >
        <div className="absolute w-full h-full left-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ease-in-out"></div>
        <button className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000 ease-in hover:ease-out">
          ABOUT ME
        </button>
      </div>
      <div
        onClick={bottomButtonHandler}
        className="group absolute bottom-0 h-1/6 w-full z-10 cursor-pointer"
      >
        <div className="absolute w-full h-full bottom-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ease-in-out"></div>
        <button className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000 ease-in hover:ease-out">
          PROJECTS
        </button>
      </div>
      <div
        onClick={rightButtonHandler}
        className="group absolute top-0 right-0 w-1/6 h-full z-20 cursor-pointer"
      >
        <div className="absolute w-full h-full right-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ease-in-out"></div>
        <button className="w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000 ease-in hover:ease-out">
          CONTACT
        </button>
      </div>
    </div>
  )
}
