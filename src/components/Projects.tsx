import { BorderLightButton } from './BorderLightButton'
import { ProjectBlock } from './ProjectBlock'
import goatsPreview from '../images/goats-preview.png'
import battleshipPreview from '../images/battleship-preview.png'
import memoryCardsPreview from '../images/memory-cards-preview.png'
import toDoPreview from '../images/to-do-preview.png'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import {
  BATTLESHIP_GITHUB_URL,
  BATTLESHIP_PREVIEW_URL,
  GOATS_URL,
  MEMORY_CARDS_GITHUB_URL,
  MEMORY_CARDS_PREVIEW_URL,
  TO_DO_GITHUB_URL,
  TO_DO_PREVIEW_URL,
} from '../constants/settings'

type Props = {
  buttonHandler: () => void
  isSliding: boolean
}

export const Projects = ({ buttonHandler, isSliding }: Props) => {
  const dictionary = useContext(LanguageContext).dictionary

  return (
    <div className="relative h-full overflow-auto">
      <div className="p-56 flex flex-col relative justify-center items-center gap-56 text-white">
        <ProjectBlock
          image={goatsPreview}
          title={dictionary.projects.goats.TITLE}
          firstButtonText={dictionary.projects.buttons.VISIT_PAGE}
          firstButtonLink={GOATS_URL}
          description={dictionary.projects.goats.DESCRIPTION}
          className="flex justify-between gap-16 w-full"
        />
        <ProjectBlock
          image={battleshipPreview}
          title={dictionary.projects.battleship.TITLE}
          firstButtonText={dictionary.projects.buttons.LIVE_PREVIEW}
          secondButtonText={dictionary.projects.buttons.GITHUB_PAGE}
          firstButtonLink={BATTLESHIP_PREVIEW_URL}
          secondButtonLink={BATTLESHIP_GITHUB_URL}
          description={dictionary.projects.battleship.DESCRIPTION}
          className="flex justify-between flex-row-reverse gap-16 w-full"
        />
        <ProjectBlock
          image={memoryCardsPreview}
          title={dictionary.projects.memoryCards.TITLE}
          firstButtonText={dictionary.projects.buttons.LIVE_PREVIEW}
          secondButtonText={dictionary.projects.buttons.GITHUB_PAGE}
          firstButtonLink={MEMORY_CARDS_PREVIEW_URL}
          secondButtonLink={MEMORY_CARDS_GITHUB_URL}
          description={dictionary.projects.memoryCards.DESCRIPTION}
          className="flex justify-between gap-16 w-full"
        />
        <ProjectBlock
          image={toDoPreview}
          title={dictionary.projects.toDo.TITLE}
          firstButtonText={dictionary.projects.buttons.LIVE_PREVIEW}
          secondButtonText={dictionary.projects.buttons.GITHUB_PAGE}
          firstButtonLink={TO_DO_PREVIEW_URL}
          secondButtonLink={TO_DO_GITHUB_URL}
          description={dictionary.projects.toDo.DESCRIPTION}
          className="flex justify-between flex-row-reverse gap-16 w-full"
        />
      </div>
      <BorderLightButton
        text={dictionary.navButtons.HOME}
        position="top"
        isActive={isSliding}
        onClick={buttonHandler}
      />
    </div>
  )
}
