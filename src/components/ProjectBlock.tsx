import { useEffect, useRef, useState } from 'react'

type Props = {
  image: string
  smallImage?: string
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
  smallImage,
  title,
  description,
  firstButtonText,
  secondButtonText,
  firstButtonLink,
  secondButtonLink,
  className,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOnScreen, setIsOnScreen] = useState(false)
  const checkViewport = () => {
    if (containerRef.current) {
      const boundingRectangle = containerRef.current.getBoundingClientRect()
      if (
        boundingRectangle.top >= 0 &&
        boundingRectangle.bottom <= window.innerHeight
      ) {
        setIsOnScreen(true)
      } else {
        setIsOnScreen(false)
      }
    }
  }

  useEffect(() => {
    const intervalID = setInterval(checkViewport, 500)
    return () => clearInterval(intervalID)
  }, [])

  return (
    <div className={className} ref={containerRef}>
      <div className="relative select-none grow-0 shrink-0 h-min w-[300px] sm:w-[400px] xl:w-[500px] 2xl:w-[700px]">
        <img
          className="w-full transition duration-500"
          style={{
            boxShadow: isOnScreen
              ? '-10px -10px 35px 0px #8e5fff'
              : '-10px -10px 35px 0px #773dff',
          }}
          srcSet={`${smallImage} 400w, ${image} 800w`}
          sizes="(max-width: 1280px) 400px, 800px"
          src={image}
          alt={title}
        />
        <div
          className="absolute top-0 w-full h-full text-lg sm:text-xl xl:text-3xl font-bold text-center flex gap-3 p-3 lg:p-6 bg-transp-bright-blue transition duration-500"
          style={{ opacity: isOnScreen ? 1 : 0 }}
        >
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
      <div className="flex flex-col text-center lg:text-left items-center lg:items-start gap-6 grow">
        <h1 className="text-3xl lg:text-5xl 2xl:text-7xl font-play-bold text-bright-green selection:text-white">
          {title}
        </h1>
        <p className="text-white text-xl lg:text-2xl 2xl:text-3xl tracking-wide">
          {description}
        </p>
      </div>
    </div>
  )
}
