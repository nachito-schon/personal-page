import { BorderLightButton } from './BorderLightButton'

type Props = {
  buttonHandler: () => void
  isSliding: boolean
}

export const Contact = ({ buttonHandler, isSliding }: Props) => {
  return (
    <div className="h-full flex flex-col relative justify-center gap-3 bg-black text-center text-white">
      <h1 className="text-6xl">You can contact me hereeee</h1>
      <h2 className="text-3xl tracking-wider">123-4567</h2>
      <BorderLightButton
        text="HOME"
        position="left"
        isActive={isSliding}
        onClick={buttonHandler}
      />
    </div>
  )
}
