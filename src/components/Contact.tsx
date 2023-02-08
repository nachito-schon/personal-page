import { useContext } from 'react'
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from '../constants/settings'
import { LanguageContext } from '../context/LanguageContext'
import { BorderLightButton } from './BorderLightButton'
import { ContactBlock } from './ContactBlock'

type Props = {
  buttonHandler: () => void
  isSliding: boolean
}

export const Contact = ({ buttonHandler, isSliding }: Props) => {
  const dictionary = useContext(LanguageContext).dictionary

  return (
    <div className="relative h-full flex justify-center">
      <div className="h-3/4 md:h-full w-5/6 xl:w-4/6 m-auto flex flex-col md:flex-row justify-center lg:gap-3 text-center text-white">
        <ContactBlock
          url={GITHUB_URL}
          title={dictionary.contact.github.TITLE}
          text={dictionary.contact.github.TEXT}
          className="xl:flex-1"
        />
        <ContactBlock
          url={LINKEDIN_URL}
          title={dictionary.contact.linkedin.TITLE}
          text={dictionary.contact.linkedin.TEXT}
          className="xl:flex-1"
        />
        <ContactBlock
          url={EMAIL_URL}
          title={dictionary.contact.email.TITLE}
          text={dictionary.contact.email.TEXT}
          className="xl:flex-1"
        />
      </div>
      <BorderLightButton
        text={dictionary.navButtons.HOME}
        position="left"
        isActive={isSliding}
        onClick={buttonHandler}
      />
    </div>
  )
}
