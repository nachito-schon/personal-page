import { FloatingParticles } from './FloatingParticles'

type Props = {
  text: string
  position?: 'top' | 'right' | 'bottom' | 'left'
  isActive?: boolean
  onClick?: () => void
}

export const BorderLightButton = ({
  text,
  position = 'bottom',
  isActive = false,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className="group absolute z-20 cursor-pointer"
      style={
        position === 'top'
          ? { top: '0px', width: '100%', height: '16.6%' }
          : position === 'bottom'
          ? { bottom: '0px', width: '100%', height: '16.6%' }
          : position === 'left'
          ? { top: '0px', left: '0px', width: '16.6%', height: '100%' }
          : { top: '0px', right: '0px', width: '16.6%', height: '100%' }
      }
    >
      <div
        className="absolute flex place-content-center w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in hover:ease-out"
        style={isActive ? { opacity: '1' } : {}}
      >
        <div className={`absolute w-full h-full ${position}-gradient`}></div>
        <div
          className="m-auto"
          style={
            position === 'top' || position === 'bottom'
              ? { width: '16.6%', height: '100%' }
              : { width: '100%', height: '16.6%' }
          }
        >
          <FloatingParticles orientation={position} />
        </div>
      </div>
      <button
        className="w-full h-full text-3xl text-white opacity-30 group-hover:opacity-100 transition-opacity duration-500"
        style={isActive ? { opacity: '1' } : {}}
      >
        {text}
      </button>
    </div>
  )
}
