type Props = {
  buttonHandler: () => void
}

export const Contact = ({ buttonHandler }: Props) => {
  return (
    <div className="h-full flex flex-col relative justify-center gap-3 bg-black text-center text-white">
      <h1 className="text-6xl">You can contact me hereeee</h1>
      <h2 className="text-3xl tracking-wider">123-4567</h2>
      <button
        onClick={buttonHandler}
        className="absolute top-0 left-0 w-1/6 h-full z-20"
      >
        HOME
      </button>
    </div>
  )
}
