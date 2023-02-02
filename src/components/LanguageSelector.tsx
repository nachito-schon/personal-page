import { useContext, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext'

type Props = {
  className?: string
}

export const LanguageSelector = ({ className }: Props) => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext)
  const [flagPosition, setFlagPosition] = useState(userLanguage)
  const selectEnglish = () => {
    if (userLanguage !== 'en') {
      userLanguageChange('en')
    }
  }

  const selectSpanish = () => {
    if (userLanguage !== 'es') {
      userLanguageChange('es')
    }
  }

  const moveFlag = (hoveredLanguage: string) => {
    if (hoveredLanguage === 'en') {
      setFlagPosition('en')
    } else {
      setFlagPosition('es')
    }
  }

  const restoreFlag = () => {
    setFlagPosition(userLanguage)
  }

  const flagClassName = `language-flag h-full w-12 duration-700 ease-in-out ${
    flagPosition === 'en' ? '-translate-x-4' : 'translate-x-4'
  }`

  const englishButtonClassName = `${
    flagPosition === 'en' ? '' : 'opacity-40 hover:opacity-100'
  } duration-700 ease-in-out`

  const spanishButtonClassName = `${
    flagPosition === 'es' ? '' : 'opacity-40 hover:opacity-100'
  } duration-700 ease-in-out`

  return (
    <div
      className={`flex justify-between items-center gap-3 text-white text-3xl ${className}`}
    >
      <button
        className={englishButtonClassName}
        onClick={selectEnglish}
        onMouseEnter={() => moveFlag('en')}
        onMouseLeave={restoreFlag}
      >
        EN
      </button>
      <div className="h-px w-12 grow overflow-hidden">
        <div className={flagClassName}></div>
      </div>
      <button
        className={spanishButtonClassName}
        onClick={selectSpanish}
        onMouseEnter={() => moveFlag('es')}
        onMouseLeave={restoreFlag}
      >
        ES
      </button>
    </div>
  )
}
