import { BorderLightButton } from './BorderLightButton'
import { ProjectBlock } from './ProjectBlock'
import personalPagePreview from '../images/personal-page-preview-800w.jpg'
import personalPagePreviewSmall from '../images/personal-page-preview-400w.jpg'
import goatsPreview from '../images/goats-preview-800w.jpg'
import goatsPreviewSmall from '../images/goats-preview-400w.jpg'
import battleshipPreview from '../images/battleship-preview-800w.jpg'
import battleshipPreviewSmall from '../images/battleship-preview-400w.jpg'
import memoryCardsPreview from '../images/memory-cards-preview-800w.jpg'
import memoryCardsPreviewSmall from '../images/memory-cards-preview-400w.jpg'
import toDoPreview from '../images/to-do-preview-800w.jpg'
import toDoPreviewSmall from '../images/to-do-preview-800w.jpg'
import { useContext, useRef } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import {
  BATTLESHIP_GITHUB_URL,
  BATTLESHIP_PREVIEW_URL,
  GOATS_URL,
  MEMORY_CARDS_GITHUB_URL,
  MEMORY_CARDS_PREVIEW_URL,
  PERSONAL_PAGE_GITHUB_URL,
  TO_DO_GITHUB_URL,
  TO_DO_PREVIEW_URL,
} from '../constants/settings'
import { useSwipeable } from 'react-swipeable'

type Props = {
  buttonHandler: () => void
  isSliding: boolean
}

export const Projects = ({ buttonHandler, isSliding }: Props) => {
  const dictionary = useContext(LanguageContext).dictionary
  const containerRef = useRef<HTMLDivElement>(null)
  const swipeHandlers = useSwipeable({
    onSwipedDown: () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        if (scrollPosition === 0) {
          buttonHandler()
        }
      }
    },
    swipeDuration: 500,
  })

  return (
    <div className="h-full overflow-hidden" {...swipeHandlers}>
      <div className="relative h-full overflow-auto" ref={containerRef}>
        <div className="w-5/6 lg:w-3/4 m-auto my-36 sm:my-44 lg:my-56 flex flex-col relative justify-center items-center gap-24 lg:gap-56 text-white">
          <ProjectBlock
            image={personalPagePreview}
            smallImage={personalPagePreviewSmall}
            title={dictionary.projects.personalPage.TITLE}
            firstButtonText={dictionary.projects.buttons.GITHUB_PAGE}
            firstButtonLink={PERSONAL_PAGE_GITHUB_URL}
            description={dictionary.projects.personalPage.DESCRIPTION}
            className="flex justify-between items-center lg:items-start flex-col-reverse lg:flex-row gap-8 lg:gap-16 w-full"
          />
          <ProjectBlock
            image={goatsPreview}
            smallImage={goatsPreviewSmall}
            title={dictionary.projects.goats.TITLE}
            firstButtonText={dictionary.projects.buttons.VISIT_PAGE}
            firstButtonLink={GOATS_URL}
            description={dictionary.projects.goats.DESCRIPTION}
            className="flex justify-between items-center lg:items-start flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16 w-full"
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
            className="flex justify-between items-center lg:items-start flex-col-reverse lg:flex-row gap-8 lg:gap-16 w-full"
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
            className="flex justify-between items-center lg:items-start flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16 w-full"
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
            className="flex justify-between items-center lg:items-start flex-col-reverse lg:flex-row gap-8 lg:gap-16 w-full"
          />
        </div>
        <BorderLightButton
          text={dictionary.navButtons.HOME}
          position="top"
          isActive={isSliding}
          onClick={buttonHandler}
        />
      </div>
    </div>
  )
}
