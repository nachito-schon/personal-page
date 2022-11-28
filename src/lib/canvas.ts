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
  orientation: 'vertical' | 'horizontal',
  xOffset: number = 0,
  yOffset: number = 0
) =>
  orientation === 'vertical'
    ? {
        x: canvas.width * (xOffset / 100),
        y: canvas.height + canvas.height * (yOffset / 100),
        radius:
          (type === 1 ? 2 : type === 2 ? 3 : 4) +
          Math.floor(4 * Math.random()) / 4,
        speed:
          type === 1
            ? 3
            : type === 2
            ? 2
            : 1 + Math.floor(4 * Math.random()) / 4,
        opacity: type === 1 ? 1 : type === 2 ? 0.6 : 0.4,
        isAnimationComplete: false,
        drawNextFrame() {
          if (this.y < 0.6 * canvas.height) {
            this.opacity -= 0.03
            this.speed -= 0.05
          }
          if (this.y - this.speed > 0 && this.speed > 0) {
            drawBall(
              context,
              this.x,
              this.y,
              this.radius,
              `rgba(255,255,255,${this.opacity})`,
              'blur(0.7px)'
            )
            this.y -= this.speed
          } else {
            this.isAnimationComplete = true
          }
        },
        reset() {
          this.y = canvas.height
          this.speed =
            type === 1
              ? 4
              : type === 2
              ? 3
              : 2 + Math.floor(4 * Math.random()) / 4
          this.opacity = type === 1 ? 1 : type === 2 ? 0.6 : 0.4
          this.isAnimationComplete = false
        },
      }
    : {
        x: canvas.height * (xOffset / 100),
        y: canvas.width + canvas.width * (yOffset / 100),
        radius:
          (type === 1 ? 2 : type === 2 ? 3 : 4) +
          Math.floor(4 * Math.random()) / 4,
        speed:
          type === 1
            ? 3
            : type === 2
            ? 2
            : 1 + Math.floor(4 * Math.random()) / 4,
        opacity: type === 1 ? 1 : type === 2 ? 0.6 : 0.4,
        isAnimationComplete: false,
        drawNextFrame() {
          if (this.y < 0.6 * canvas.width) {
            this.opacity -= 0.03
            this.speed -= 0.05
          }
          if (this.y - this.speed > 0 && this.speed > 0) {
            drawBall(
              context,
              this.y,
              this.x,
              this.radius,
              `rgba(255,255,255,${this.opacity})`,
              'blur(0.7px)'
            )
            this.y -= this.speed
          } else {
            this.isAnimationComplete = true
          }
        },
        reset() {
          this.y = canvas.width
          this.speed =
            type === 1
              ? 4
              : type === 2
              ? 3
              : 2 + Math.floor(4 * Math.random()) / 4
          this.opacity = type === 1 ? 1 : type === 2 ? 0.6 : 0.4
          this.isAnimationComplete = false
        },
      }
