import { BorderLightButton } from './BorderLightButton'

type Props = {
  buttonHandler: () => void
  isSliding: boolean
}

export const About = ({ buttonHandler, isSliding }: Props) => {
  return (
    <div className="h-full overflow-auto">
      <div className="w-3/5 m-auto my-24 flex flex-col relative justify-center gap-3 text-justify indent-12 leading-normal text-white text-3xl tracking-wide">
        <h1 className="pt-12 pb-2 self-start indent-0 text-5xl font-play-bold text-bright-green selection:text-white">
          Hi!
        </h1>
        <p>
          My name is Ignacio. I am an{' '}
          <span className="font-play-bold text-bright-green selection:text-white">
            argentinian
          </span>{' '}
          developer looking to start my professional career in web development.
        </p>
        <h1 className="pt-12 pb-2 self-start indent-0 text-5xl font-play-bold text-bright-green selection:text-white">
          My experience
        </h1>
        <p>
          I first got into{' '}
          <span className="font-play-bold text-bright-green selection:text-white">
            programming
          </span>{' '}
          in college, as I was studying electronic engineering. I learned the
          basics of algorithms, databases and C language, and really enjoyed the
          logic process of writing code.
        </p>
        <p>
          Eventually, I found out about web development and started following{' '}
          <a
            href="https://www.theodinproject.com/"
            target={'_blank'}
            className="font-play-bold text-bright-blue hover:text-light-bright-blue hover:underline decoration-4 underline-offset-4 selection:text-white"
            rel="noreferrer"
          >
            The Odin Project
          </a>
          's curriculum.
        </p>
        <p>
          Later on in my learning course, I got into a project as part of a
          small team. As the only developer, I helped bringing a{' '}
          <a
            href="https://goats-game.com/"
            target={'_blank'}
            className="font-play-bold text-bright-blue hover:text-light-bright-blue hover:underline decoration-4 underline-offset-4 selection:text-white"
            rel="noreferrer"
          >
            web-based game
          </a>{' '}
          with more than a thousand visits per day to reality.
        </p>
        <h1 className="pt-12 pb-2 self-start indent-0 text-5xl font-play-bold text-bright-green selection:text-white">
          Motivations
        </h1>
        <p>
          I'm a creative, I am passionate about art in most of its forms, fact
          which often subtly finds, in one way or another, its way into my work.
        </p>
        <p>
          Web development allows me to express this{' '}
          <span className="font-play-bold text-bright-green selection:text-white">
            creativity
          </span>
          , be it by finding clever and efficient solutions to logic problems,
          or through the styling of an app's layout.
        </p>
      </div>
      <BorderLightButton
        text="HOME"
        position="right"
        isActive={isSliding}
        onClick={buttonHandler}
      />
    </div>
  )
}
