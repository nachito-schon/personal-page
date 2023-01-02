import { useEffect, useLayoutEffect, useRef } from 'react'
import { makeFadeInTitle } from '../lib/canvas'

type Props = {
  title: string
  subtitle: string
  style?: React.CSSProperties
}

export const Title = ({ title, subtitle, style }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const updateSize = () => {
    const canvas = canvasRef.current
    if (canvas && canvas.parentElement) {
      canvas.width = Math.round(canvas.parentElement.clientWidth / 2)
      canvas.height = Math.round(canvas.width / 4)
    }
  }

  const draw = () => {
    document.fonts.ready.then(() => {
      const canvas = canvasRef.current
      if (canvas) {
        const context = canvas.getContext('2d')
        if (context) {
          makeFadeInTitle(canvas, context, title, subtitle)
        }
      }
    })
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', () => {
      updateSize()
      draw()
    })

    return () =>
      window.removeEventListener('resize', () => {
        updateSize()
        draw()
      })
  }, [])

  useEffect(() => {
    updateSize()
    draw()
  }, [])

  return (
    <canvas style={style} className="m-auto" ref={canvasRef}>
      <h1 className="text-8xl tracking-wide -translate-x-12">{title}</h1>
      <h2 className="text-5xl font-play-bold tracking-widest text-bright-green translate-x-16">
        {subtitle}
      </h2>
    </canvas>
  )
}
