export const getRandomSequence = (length: number) => {
  const sequence = [] as number[]
  for (let index = 0; index < length; index += 1) {
    let number = Math.floor(length * Math.random()) + 1
    while (sequence.includes(number)) {
      if (number >= length) {
        number = 1
      } else {
        number += 1
      }
    }
    sequence.push(number)
  }

  return sequence
}
