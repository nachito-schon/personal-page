type Props = {
  image: string
  title: string
  description: string
}

export const ProjectBlock = ({ image, title, description }: Props) => {
  return (
    <div className="flex gap-16">
      <div className="relative group">
        <img className="shadow-tl shadow-bright-blue" src={image} alt={title} />
        <div className="absolute top-0 w-full h-full text-3xl font-bold flex gap-3 p-6 bg-transp-bright-blue opacity-0 group-hover:opacity-100 transition duration-500">
          <button className="bg-transp-light-bright-blue hover:bg-light-bright-blue grow transition duration-500">
            LIVE PREVIEW
          </button>
          <button className="bg-transp-light-bright-blue hover:bg-light-bright-blue grow transition duration-500">
            GITHUB PAGE
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-7xl font-play-bold text-bright-green selection:text-white">
          {title}
        </h1>
        <p className="text-white text-3xl tracking-wide">{description}</p>
      </div>
    </div>
  )
}
