import { BorderLightButton } from './BorderLightButton'
import { ProjectBlock } from './ProjectBlock'
import goatsPreview from '../images/goats-preview-800w.png'
import goatsPreviewSmall from '../images/goats-preview-400w.png'
import battleshipPreview from '../images/battleship-preview-800w.png'
import battleshipPreviewSmall from '../images/battleship-preview-400w.png'
import memoryCardsPreview from '../images/memory-cards-preview-800w.png'
import memoryCardsPreviewSmall from '../images/memory-cards-preview-400w.png'
import toDoPreview from '../images/to-do-preview-800w.png'
import toDoPreviewSmall from '../images/to-do-preview-800w.png'
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
      <div className="w-5/6 lg:w-3/4 m-auto my-36 sm:my-44 lg:my-56 flex flex-col relative justify-center items-center gap-24 lg:gap-56 text-white">
        <ProjectBlock
          image={goatsPreview}
          smallImage={goatsPreviewSmall}
          title={dictionary.projects.goats.TITLE}
          firstButtonText={dictionary.projects.buttons.VISIT_PAGE}
          firstButtonLink={GOATS_URL}
          description={dictionary.projects.goats.DESCRIPTION}
          className="flex justify-between items-center lg:items-start flex-col-reverse lg:flex-row gap-8 lg:gap-16 w-full"
        />
        <ProjectBlock
          image={battleshipPreview}
          smallImage={battleshipPreviewSmall}
          title={dictionary.projects.battleship.TITLE}
          firstButtonText={dictionary.projects.buttons.LIVE_PREVIEW}
          secondButtonText={dictionary.projects.buttons.GITHUB_PAGE}
          firstButtonLink={BATTLESHIP_PREVIEW_URL}
          secondButtonLink={BATTLESHIP_GITHUB_URL}
          description={dictionary.projects.battleship.DESCRIPTION}
          className="flex justify-between items-center lg:items-start flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16 w-full"
        />
        <ProjectBlock
          image={memoryCardsPreview}
          smallImage={memoryCardsPreviewSmall}
          title={dictionary.projects.memoryCards.TITLE}
          firstButtonText={dictionary.projects.buttons.LIVE_PREVIEW}
          secondButtonText={dictionary.projects.buttons.GITHUB_PAGE}
          firstButtonLink={MEMORY_CARDS_PREVIEW_URL}
          secondButtonLink={MEMORY_CARDS_GITHUB_URL}
          description={dictionary.projects.memoryCards.DESCRIPTION}
          className="flex justify-between items-center lg:items-start flex-col-reverse lg:flex-row gap-8 lg:gap-16 w-full"
        />
        <ProjectBlock
          image={toDoPreview}
          smallImage={toDoPreviewSmall}
          title={dictionary.projects.toDo.TITLE}
          firstButtonText={dictionary.projects.buttons.LIVE_PREVIEW}
          secondButtonText={dictionary.projects.buttons.GITHUB_PAGE}
          firstButtonLink={TO_DO_PREVIEW_URL}
          secondButtonLink={TO_DO_GITHUB_URL}
          description={dictionary.projects.toDo.DESCRIPTION}
          className="flex justify-between items-center lg:items-start flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16 w-full"
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
