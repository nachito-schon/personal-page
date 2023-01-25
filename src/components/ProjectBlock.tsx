type Props = {
  image: string
  title: string
  description: string
  firstButtonText: string
  secondButtonText?: string
  firstButtonLink: string
  secondButtonLink?: string
  className?: string
}

export const ProjectBlock = ({
  image,
  title,
  description,
  firstButtonText,
  secondButtonText,
  firstButtonLink,
  secondButtonLink,
  className,
}: Props) => {
  return (
    <div className={className}>
      <div className="relative group">
        <img
          className="shadow-tl shadow-bright-blue group-hover:shadow-light-bright-blue transition duration-500"
          src={image}
          alt={title}
        />
        <div className="absolute top-0 w-full h-full text-3xl font-bold text-center flex gap-3 p-6 bg-transp-bright-blue opacity-0 group-hover:opacity-100 transition duration-500">
          <a
            href={firstButtonLink}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col justify-center bg-transp-light-bright-blue hover:bg-light-bright-blue grow flex-1 transition duration-500 cursor-pointer"
          >
            {firstButtonText}
          </a>
          {secondButtonText ? (
            <a
              href={secondButtonLink}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col justify-center bg-transp-light-bright-blue hover:bg-light-bright-blue grow flex-1 transition duration-500 cursor-pointer"
            >
              {secondButtonText}
            </a>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 grow">
        <h1 className="text-7xl font-play-bold text-bright-green selection:text-white">
          {title}
        </h1>
        <p className="text-white text-3xl tracking-wide">{description}</p>
      </div>
    </div>
  )
}
