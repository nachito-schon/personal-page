import { useContext } from 'react'
import { GOATS_URL, THE_ODIN_PROJECT_URL } from '../constants/settings'
import { LanguageContext } from '../context/LanguageContext'
import { BorderLightButton } from './BorderLightButton'

type Props = {
  buttonHandler: () => void
  isSliding: boolean
}

export const About = ({ buttonHandler, isSliding }: Props) => {
  const dictionary = useContext(LanguageContext).dictionary

  return (
    <div className="h-full overflow-auto">
      <div className="w-3/5 m-auto my-12 2xl:my-24 flex flex-col relative justify-center gap-3 text-justify indent-12 leading-normal text-white text-xl lg:text-2xl 2xl:text-3xl tracking-wide">
        <h1 className="pt-12 pb-2 self-start indent-0 text-4xl lg:text-5xl font-play-bold text-bright-green selection:text-white">
          {dictionary.about.introduction.HEADER}
        </h1>
        <p>
          {dictionary.about.introduction.TEXT[0]}
          <span className="font-play-bold text-bright-green selection:text-white">
            {dictionary.about.introduction.HIGHLIGHTED_TEXT}
          </span>
          {dictionary.about.introduction.TEXT[1]}
        </p>
        <h1 className="pt-12 pb-2 self-start indent-0 text-4xl lg:text-5xl font-play-bold text-bright-green selection:text-white">
          {dictionary.about.experience.HEADER}
        </h1>
        <p>
          {dictionary.about.experience.TEXT[0]}
          <span className="font-play-bold text-bright-green selection:text-white">
            {dictionary.about.experience.HIGHLIGHTED_TEXT}
          </span>
          {dictionary.about.experience.TEXT[1]}
        </p>
        <p>
          {dictionary.about.experience.TEXT[2]}
          <a
            href={THE_ODIN_PROJECT_URL}
            target={'_blank'}
            className="font-play-bold text-bright-blue hover:text-light-bright-blue hover:underline decoration-4 underline-offset-4 selection:text-white"
            rel="noreferrer"
          >
            {dictionary.about.experience.LINK[0]}
          </a>
          {dictionary.about.experience.TEXT[3]}
        </p>
        <p>
          {dictionary.about.experience.TEXT[4]}
          <a
            href={GOATS_URL}
            target={'_blank'}
            className="font-play-bold text-bright-blue hover:text-light-bright-blue hover:underline decoration-4 underline-offset-4 selection:text-white"
            rel="noreferrer"
          >
            {dictionary.about.experience.LINK[1]}
          </a>
          {dictionary.about.experience.TEXT[5]}
        </p>
        <h1 className="pt-12 pb-2 self-start indent-0 text-4xl lg:text-5xl font-play-bold text-bright-green selection:text-white">
          {dictionary.about.motivations.HEADER}
        </h1>
        <p>{dictionary.about.motivations.TEXT[0]}</p>
        <p>
          {dictionary.about.motivations.TEXT[1]}
          <span className="font-play-bold text-bright-green selection:text-white">
            {dictionary.about.motivations.HIGHLIGHTED_TEXT}
          </span>
          {dictionary.about.motivations.TEXT[2]}
        </p>
      </div>
      <BorderLightButton
        text={dictionary.navButtons.HOME}
        position="right"
        isActive={isSliding}
        onClick={buttonHandler}
      />
    </div>
  )
}
