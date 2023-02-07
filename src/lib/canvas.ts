import { Language } from '../constants/languages/dictionary'
import { getRandomSequence } from './math'

const drawBall = (
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  color: string,
  filter: string
) => {
  context.beginPath()
  context.arc(Math.floor(x), Math.floor(y), radius, 0, Math.PI * 2, true)
  context.closePath()
  context.filter = filter
  context.fillStyle = color
  context.fill()
}

export const makeFloatingParticle = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  type: 1 | 2 | 3,
  orientation: 'top' | 'right' | 'bottom' | 'left',
  xOffset: number = 0,
  yOffset: number = 0
) =>
  orientation === 'top' || orientation === 'bottom'
    ? {
        x: canvas.width * (xOffset / 100),
        y:
          orientation === 'bottom'
            ? canvas.height + canvas.height * (yOffset / 100)
            : 0 - canvas.height * (yOffset / 100),
        radius:
          (type === 1 ? 2 : type === 2 ? 3 : 4) +
          Math.floor(4 * Math.random()) / 4,
        speed:
          type === 1
            ? 1.5
            : type === 2
            ? 1
            : 0.25 + Math.floor(4 * Math.random()) / 4,
        opacity: type === 1 ? 1 : type === 2 ? 0.6 : 0.4,
        isAnimationComplete: false,
        drawNextFrame() {
          if (
            (orientation === 'bottom' && this.y < 0.6 * canvas.height) ||
            (orientation === 'top' && this.y > 0.4 * canvas.height)
          ) {
            this.opacity -= 0.01
            this.speed -= 0.01
          }

          if (
            ((orientation === 'bottom' && this.y - this.speed > 0) ||
              (orientation === 'top' && this.y - this.speed < canvas.height)) &&
            this.speed > 0
          ) {
            drawBall(
              context,
              this.x,
              this.y,
              this.radius,
              `rgba(255,255,255,${this.opacity})`,
              'blur(0.7px)'
            )
            this.y =
              orientation === 'bottom'
                ? this.y - this.speed
                : this.y + this.speed
          } else {
            this.isAnimationComplete = true
          }
        },
        reset() {
          this.y = orientation === 'bottom' ? canvas.height : 0
          this.speed =
            type === 1
              ? 1.5
              : type === 2
              ? 1
              : 0.25 + Math.floor(4 * Math.random()) / 4
          this.opacity = type === 1 ? 1 : type === 2 ? 0.6 : 0.4
          this.isAnimationComplete = false
        },
      }
    : {
        x: canvas.height * (xOffset / 100),
        y:
          orientation === 'right'
            ? canvas.width + canvas.width * (yOffset / 100)
            : 0 - canvas.width * (yOffset / 100),
        radius:
          (type === 1 ? 2 : type === 2 ? 3 : 4) +
          Math.floor(4 * Math.random()) / 4,
        speed:
          type === 1
            ? 1.5
            : type === 2
            ? 1
            : 0.25 + Math.floor(4 * Math.random()) / 8,
        opacity: type === 1 ? 1 : type === 2 ? 0.6 : 0.4,
        isAnimationComplete: false,
        drawNextFrame() {
          if (
            (orientation === 'right' && this.y < 0.6 * canvas.width) ||
            (orientation === 'left' && this.y > 0.4 * canvas.width)
          ) {
            this.opacity -= 0.01
            this.speed -= 0.01
          }

          if (
            ((orientation === 'right' && this.y - this.speed > 0) ||
              (orientation === 'left' && this.y - this.speed < canvas.width)) &&
            this.speed > 0
          ) {
            drawBall(
              context,
              this.y,
              this.x,
              this.radius,
              `rgba(255,255,255,${this.opacity})`,
              'blur(0.7px)'
            )
            this.y =
              orientation === 'right'
                ? this.y - this.speed
                : this.y + this.speed
          } else {
            this.isAnimationComplete = true
          }
        },
        reset() {
          this.y = orientation === 'right' ? canvas.width : 0
          this.speed =
            type === 1
              ? 1.5
              : type === 2
              ? 1
              : 0.25 + Math.floor(4 * Math.random()) / 8
          this.opacity = type === 1 ? 1 : type === 2 ? 0.6 : 0.4
          this.isAnimationComplete = false
        },
      }

export const makeTitleAnimation = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  titleText: string,
  subtitleText: string,
  language: Language
) => {
  const title = {
    text: titleText,
    splitText: titleText.split(' '),
    size: Math.round(canvas.height / 8.4),
    blur: 15,
    opacity: 0,
    draw: () => {
      context.fillStyle = `rgba(255, 255, 255, ${title.opacity})`
      context.filter = `blur(${title.blur}px)`
      if (canvas.width > 500) {
        context.font = `${title.size}px Roboto`
        context.fillText(title.text, 0, Math.round(canvas.height / 2))
      } else {
        context.font = `${title.size * 1.7}px Roboto`
        context.fillText(
          title.splitText[0],
          0,
          Math.round(canvas.height / 2) - title.size * 1.7
        )
        context.fillText(title.splitText[1], 0, Math.round(canvas.height / 2))
      }
    },
    update: () => {
      if (title.blur > 0) {
        title.blur -= 0.15
      }

      if (title.opacity < 1) {
        title.opacity += 0.02
      }
    },
  }

  const randomSequence = getRandomSequence(subtitleText.length)
  const subtitle = {
    characters: subtitleText.split('').map((character, index) => ({
      character,
      opacity: -0.5 - 0.1 * randomSequence[index],
    })),
    splitCharacters: subtitleText.split(' ').map((word) =>
      word.split('').map((character, index) => ({
        character,
        opacity: -0.5 - 0.1 * randomSequence[index],
      }))
    ),
    size: language === 'en' ? title.size / 2 : title.size / 2.55,
    draw: () => {
      context.filter = 'none'
      if (canvas.width > 500) {
        context.font = `${subtitle.size}px Play Bold`
        subtitle.characters.reduce((offset, char) => {
          context.fillStyle = `rgba(30, 255, 97, ${char.opacity})`
          context.fillText(
            char.character,
            Math.round(canvas.width / 6) + offset,
            Math.round(canvas.height / 1.92 + subtitle.size)
          )
          return (
            offset +
            context.measureText(char.character).width +
            canvas.width / 150
          )
        }, 0)
      } else {
        context.font = `${subtitle.size * 1.5}px Play Bold`
        subtitle.splitCharacters[0].reduce((offset, char) => {
          context.fillStyle = `rgba(30, 255, 97, ${char.opacity})`
          context.fillText(
            char.character,
            Math.round(canvas.width / 4) + offset,
            Math.round(canvas.height / 1.75 + subtitle.size)
          )
          return (
            offset +
            context.measureText(char.character).width +
            canvas.width / 150
          )
        }, 0)

        subtitle.splitCharacters[1].reduce((offset, char) => {
          context.fillStyle = `rgba(30, 255, 97, ${char.opacity})`
          context.fillText(
            char.character,
            Math.round(canvas.width / 4) + offset,
            Math.round(canvas.height / 1.75 + subtitle.size * 2.8)
          )
          return (
            offset +
            context.measureText(char.character).width +
            canvas.width / 150
          )
        }, 0)
      }
    },
    update: () => {
      if (canvas.width > 500) {
        subtitle.characters.forEach((char) => {
          if (char.opacity < 1) {
            char.opacity += 0.01
          }
        })
      } else {
        subtitle.splitCharacters.forEach((word) =>
          word.forEach((char) => {
            if (char.opacity < 1) {
              char.opacity += 0.01
            }
          })
        )
      }
    },
  }

  const drawFrame = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    title.draw()
    title.update()
    subtitle.draw()
    subtitle.update()
    const isAnimationComplete =
      title.blur <= 0 &&
      title.opacity >= 1 &&
      (!subtitle.characters.some((char) => char.opacity < 1) ||
        !subtitle.splitCharacters.some((word) =>
          word.some((char) => char.opacity < 1)
        ))
    if (!isAnimationComplete) {
      window.requestAnimationFrame(drawFrame)
    }
  }

  window.requestAnimationFrame(drawFrame)
}
