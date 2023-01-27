import { SocialIcon } from 'react-social-icons'

type Props = {
  url: string
  title: string
  text?: string
  className?: string
}

export const ContactBlock = ({ url, title, className, text }: Props) => {
  const classes = `m-auto group overflow-x-hidden ${className}`

  return (
    <div className={classes}>
      <SocialIcon
        fgColor="white"
        bgColor="transparent"
        className="drop-shadow-[-5px_-5px_3px_#773dff] group-hover:drop-shadow-[-7px_-7px_5px_#8e5fff] transition duration-500"
        style={{
          height: 200,
          width: 200,
          outline: 'none',
        }}
        url={url}
        target="_blank"
      />
      <div className="h-10 overflow-hidden">
        <div className="relative -top-10 group-hover:top-2 transition-all duration-300 ease-in-out">
          <h1 className="h-10 font-play-bold text-2xl text-bright-blue">
            {text || url}
          </h1>
          <h1 className="h-10 font-play-bold text-4xl text-bright-green select-none">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}
