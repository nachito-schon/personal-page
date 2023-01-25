import { BorderLightButton } from './BorderLightButton'
import { ProjectBlock } from './ProjectBlock'
import goatsPreview from '../images/goats-preview.png'
import battleshipPreview from '../images/battleship-preview.png'
import memoryCardsPreview from '../images/memory-cards-preview.png'
import toDoPreview from '../images/to-do-preview.png'

type Props = {
  buttonHandler: () => void
  isSliding: boolean
}

export const Projects = ({ buttonHandler, isSliding }: Props) => {
  return (
    <div className="relative h-full overflow-auto">
      <div className="p-56 flex flex-col relative justify-center items-center gap-56 text-white">
        <ProjectBlock
          image={goatsPreview}
          title="GOATS"
          firstButtonText="VISIT WEB-PAGE"
          firstButtonLink="https://goats-game.com"
          description="A guessing sports game."
          className="flex justify-between gap-16 w-full"
        />
        <ProjectBlock
          image={battleshipPreview}
          title="Battleship"
          firstButtonText="LIVE PREVIEW"
          secondButtonText="GITHUB PAGE"
          firstButtonLink=""
          description="Classic single-player battleship game, with computer AI."
          className="flex justify-between flex-row-reverse gap-16 w-full"
        />
        <ProjectBlock
          image={memoryCardsPreview}
          title="Memory card game"
          firstButtonText="LIVE PREVIEW"
          secondButtonText="GITHUB PAGE"
          firstButtonLink=""
          description="A memory game where you have to avoid clicking the same picture twice."
          className="flex justify-between gap-16 w-full"
        />
        <ProjectBlock
          image={toDoPreview}
          title="To-do list"
          firstButtonText="LIVE PREVIEW"
          secondButtonText="GITHUB PAGE"
          firstButtonLink=""
          description="A web-app that allows to create lists of tasks, specifying date and importance."
          className="flex justify-between flex-row-reverse gap-16 w-full"
        />
      </div>
      <BorderLightButton
        text="HOME"
        position="top"
        isActive={isSliding}
        onClick={buttonHandler}
      />
    </div>
  )
}
