import { BorderLightButton } from './BorderLightButton'

type Props = {
  buttonHandler: () => void
  isSliding: boolean
}

export const Projects = ({ buttonHandler, isSliding }: Props) => {
  return (
    <div className="h-full flex flex-col relative justify-center gap-3 bg-black text-center text-white">
      <h1 className="text-6xl">I DID ALL OF THIS OMGGG</h1>
      <h2 className="text-3xl tracking-wider">IM SO GREAATTTTTT</h2>
      <BorderLightButton
        text="HOME"
        position="top"
        isActive={isSliding}
        onClick={buttonHandler}
      />
    </div>
  )
}
