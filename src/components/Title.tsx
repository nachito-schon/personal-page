import { useEffect, useLayoutEffect, useRef } from 'react'
import { Language } from '../constants/languages/dictionary'
import { makeTitleAnimation } from '../lib/canvas'
import { debounce } from '../lib/events'

type Props = {
  title: string
  subtitle: string
  style?: React.CSSProperties
  language: Language
}

export const Title = ({ title, subtitle, style, language }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const updateSize = () => {
    const canvas = canvasRef.current
    if (canvas && canvas.parentElement) {
      canvas.width = Math.round(canvas.parentElement.clientWidth / 2)
      canvas.height = canvas.width
    }
  }

  const draw = () => {
    document.fonts.ready.then(() => {
      const canvas = canvasRef.current
      if (canvas) {
        const context = canvas.getContext('2d')
        if (context) {
          makeTitleAnimation(canvas, context, title, subtitle, language)
        }
      }
    })
  }

  useLayoutEffect(() => {
    window.addEventListener(
      'resize',
      debounce(() => {
        updateSize()
        draw()
      }, 1000)
    )

    return () =>
      window.removeEventListener(
        'resize',
        debounce(() => {
          updateSize()
          draw()
        }, 1000)
      )
  }, [])

  useEffect(() => {
    updateSize()
    draw()
  }, [title, subtitle])

  return (
    <canvas
      style={style}
      className="mb-24 mr-16 mt-auto ml-auto md:m-auto"
      ref={canvasRef}
    >
      <h1 className="text-8xl tracking-wide -translate-x-12">{title}</h1>
      <h2 className="text-5xl font-play-bold tracking-widest text-bright-green translate-x-16">
        {subtitle}
      </h2>
    </canvas>
  )
}
