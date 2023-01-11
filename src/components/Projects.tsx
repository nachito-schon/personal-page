import { BorderLightButton } from './BorderLightButton'
import { ProjectBlock } from './ProjectBlock'
import goatsPreview from '../images/GOATS-preview.png'

type Props = {
  buttonHandler: () => void
  isSliding: boolean
}

export const Projects = ({ buttonHandler, isSliding }: Props) => {
  return (
    <div className="h-full flex flex-col relative justify-center items-center gap-3 text-center text-white">
      <ProjectBlock
        image={goatsPreview}
        title="GOATS"
        description="A guessing sports game"
      />
      <BorderLightButton
        text="HOME"
        position="top"
        isActive={isSliding}
        onClick={buttonHandler}
      />
    </div>
  )
}
