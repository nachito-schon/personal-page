type Props = {
  rightButtonHandler: () => void
}

export const Home = ({ rightButtonHandler }: Props) => {
  return (
    <div className="h-full flex flex-col relative justify-center gap-3 bg-black text-center text-white">
      <h1 className="text-6xl">Ignacio Schonfeld</h1>
      <h2 className="text-3xl tracking-wider">FULL-STACK DEVELOPER</h2>
      <button
        onClick={rightButtonHandler}
        className="absolute top-0 left-0 w-1/6 h-full bg-neutral-800 opacity-50 z-20"
      >
        ABOUT ME
      </button>
      <button className="absolute bottom-0 h-1/6 w-full bg-neutral-800 opacity-50 z-10">
        PROJECTS
      </button>
      <button className="absolute top-0 right-0 w-1/6 h-full bg-neutral-800 opacity-50 z-20">
        CONTACT
      </button>
    </div>
  )
}
