import { createContext, ReactNode, useState } from 'react'
import {
  dictionaryList,
  Language,
  languageOptions,
} from '../constants/languages/dictionary'

export const LanguageContext = createContext({
  userLanguage: 'en' as Language,
  dictionary: dictionaryList.en,
  userLanguageChange: (selectedLanguage: Language) => {},
})

type Props = { children?: ReactNode }

export function LanguageProvider({ children }: Props) {
  const preferredLanguage = navigator.language.toLowerCase().includes('es')
    ? 'es'
    : 'en'
  const defaultLanguage =
    (localStorage.getItem('rcml-lang') as Language) || preferredLanguage
  const [userLanguage, setUserLanguage] = useState<Language>(defaultLanguage)

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selectedLanguage: Language) => {
      const newLanguage = languageOptions[selectedLanguage]
        ? selectedLanguage
        : 'en'
      setUserLanguage(newLanguage)
      localStorage.setItem('rcml-lang', newLanguage)
    },
  }

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
}
