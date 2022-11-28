import { BorderLightButton } from './BorderLightButton'

type Props = {
  buttonHandler: () => void
  isSliding: boolean
}

export const About = ({ buttonHandler, isSliding }: Props) => {
  return (
    <div className="h-full flex flex-col relative justify-center gap-3 bg-black text-center text-white">
      <h1 className="text-6xl">Im this and that</h1>
      <h2 className="text-3xl tracking-wider">you know...</h2>
      <BorderLightButton
        text="HOME"
        position="right"
        isActive={isSliding}
        onClick={buttonHandler}
      />
    </div>
  )
}
