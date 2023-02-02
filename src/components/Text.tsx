import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

type Props = {
  id: string
  className?: string
}

export const Text = ({ id, className = '' }: Props) => {
  const languageContext = useContext(LanguageContext)
  return (
    <p className={className}>
      {languageContext.dictionary[
        id as keyof typeof languageContext.dictionary
      ] || id}
    </p>
  )
}
