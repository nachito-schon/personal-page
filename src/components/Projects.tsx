type Props = {
  buttonHandler: () => void
}

export const Projects = ({ buttonHandler }: Props) => {
  return (
    <div className="h-full flex flex-col relative justify-center gap-3 bg-black text-center text-white">
      <h1 className="text-6xl">I DID ALL OF THIS OMGGG</h1>
      <h2 className="text-3xl tracking-wider">IM SO GREAATTTTTT</h2>
      <button
        onClick={buttonHandler}
        className="absolute top-0 h-1/6 w-full bg-neutral-800 opacity-50 z-20"
      >
        HOME
      </button>
    </div>
  )
}
