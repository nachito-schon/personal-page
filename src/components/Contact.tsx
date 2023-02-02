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
    <div className="relative h-full">
      <div className="h-full w-4/6 m-auto flex justify-center gap-3 text-center text-white">
        <ContactBlock
          url={GITHUB_URL}
          title={dictionary.contact.github.TITLE}
          text={dictionary.contact.github.TEXT}
          className="flex-1"
        />
        <ContactBlock
          url={LINKEDIN_URL}
          title={dictionary.contact.linkedin.TITLE}
          text={dictionary.contact.linkedin.TEXT}
          className="flex-1"
        />
        <ContactBlock
          url={EMAIL_URL}
          title={dictionary.contact.email.TITLE}
          text={dictionary.contact.email.TEXT}
          className="flex-1"
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
