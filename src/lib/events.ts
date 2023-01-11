export const debounce = (callback: () => void, delay: number) => {
  let inDebounce: ReturnType<typeof setTimeout>
  return function () {
    clearTimeout(inDebounce)
    inDebounce = setTimeout(callback, delay)
  }
}
