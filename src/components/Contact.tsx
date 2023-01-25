import { BorderLightButton } from './BorderLightButton'
import { ContactBlock } from './ContactBlock'

type Props = {
  buttonHandler: () => void
  isSliding: boolean
}

export const Contact = ({ buttonHandler, isSliding }: Props) => {
  return (
    <div className="relative h-full">
      <div className="h-full w-4/6 m-auto flex justify-center gap-3 text-center text-white">
        <ContactBlock
          url="https://github.com/nachito-schon"
          title="GITHUB"
          text="github.com/nachito-schon"
          className="flex-1"
        />
        <ContactBlock
          url="https://www.linkedin.com/in/ignacio-schonfeld-07aa68140/"
          title="LINKEDIN"
          text="Ignacio Schonfeld"
          className="flex-1"
        />
        <ContactBlock
          url="mailto:ignacioschonfeld@gmail.com"
          title="E-MAIL"
          text="ignacioschonfeld@gmail.com"
          className="flex-1"
        />
      </div>
      <BorderLightButton
        text="HOME"
        position="left"
        isActive={isSliding}
        onClick={buttonHandler}
      />
    </div>
  )
}
