import { SocialIcon } from 'react-social-icons'

type Props = {
  url: string
  title: string
  text?: string
  className?: string
}

export const ContactBlock = ({ url, title, className, text }: Props) => {
  const classes = `m-auto group overflow-hidden ${className}`

  return (
    <div className={classes}>
      <div className="w-[100px] md:w-[150px] xl:w-[200px] h-[100px] md:h-[150px] xl:h-[200px] m-auto">
        <SocialIcon
          fgColor="white"
          bgColor="transparent"
          className="drop-shadow-[-5px_-5px_3px_#773dff] group-hover:drop-shadow-[-7px_-7px_5px_#8e5fff] transition duration-500"
          style={{
            width: '100%',
            height: '100%',
            outline: 'none',
          }}
          url={url}
          target="_blank"
        />
      </div>
      <div className="h-10 overflow-hidden">
        <div className="relative -top-10 group-hover:top-2 transition-all duration-300 ease-in-out">
          <h1 className="h-10 font-play-bold text-md md:text-lg 2xl:text-2xl text-bright-blue">
            {text || url}
          </h1>
          <h1 className="h-10 font-play-bold text-2xl md:text-3xl xl:text-4xl text-bright-green select-none">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}
