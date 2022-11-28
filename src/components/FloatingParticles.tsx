import { useEffect, useLayoutEffect, useRef } from 'react'
import { makeFloatingParticle } from '../lib/canvas'

type Props = { orientation?: 'top' | 'right' | 'bottom' | 'left' }

export const FloatingParticles = ({ orientation = 'bottom' }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const updateSize = () => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = canvas.parentElement?.clientWidth || 300
      canvas.height = canvas.parentElement?.clientHeight || 150
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    updateSize()
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d')
      if (context) {
        const particles = [] as ReturnType<typeof makeFloatingParticle>[]
        const TOTAL_PARTICLES = 10
        const PERCENTAGE_OF_TYPE_2 = 45
        const PERCENTAGE_OF_TYPE_3 = 30
        for (let index = 0; index < TOTAL_PARTICLES; index += 1) {
          if (index / TOTAL_PARTICLES < PERCENTAGE_OF_TYPE_3 / 100) {
            particles.push(
              makeFloatingParticle(
                canvas,
                context,
                3,
                orientation === 'top' || orientation === 'bottom'
                  ? 'vertical'
                  : 'horizontal',
                100 * Math.random(),
                100 * Math.random()
              )
            )
          } else if (index / TOTAL_PARTICLES < PERCENTAGE_OF_TYPE_2 / 100) {
            particles.push(
              makeFloatingParticle(
                canvas,
                context,
                2,
                orientation === 'top' || orientation === 'bottom'
                  ? 'vertical'
                  : 'horizontal',
                100 * Math.random(),
                100 * Math.random()
              )
            )
          } else {
            particles.push(
              makeFloatingParticle(
                canvas,
                context,
                1,
                orientation === 'top' || orientation === 'bottom'
                  ? 'vertical'
                  : 'horizontal',
                100 * Math.random(),
                100 * Math.random()
              )
            )
          }
        }

        if (orientation === 'top' || orientation === 'left') {
          context.translate(canvas.width, canvas.height)
          context.scale(-1, -1)
        }
        const drawFrame = () => {
          context.clearRect(0, 0, canvas.width, canvas.height)
          particles.forEach((particle) => {
            particle.drawNextFrame()
            if (particle.isAnimationComplete) {
              particle.reset()
              particle.x =
                orientation === 'top' || orientation === 'bottom'
                  ? canvas.width * Math.random()
                  : canvas.height * Math.random()
            }
          })
          window.requestAnimationFrame(drawFrame)
        }
        window.requestAnimationFrame(drawFrame)
      }
    }
  }, [])

  return <canvas ref={canvasRef}></canvas>
}
