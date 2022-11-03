import { useRef } from 'react'

type Props = {
  header: string
  list: string[] | JSX.Element[]
  footer?: string
  isExpandedForced?: boolean
}

export function ExpandableList({
  header,
  list,
  footer = '',
  isExpandedForced = false,
}: Props) {
  const collapsable = useRef<HTMLDivElement>(null)

  const onMouseEnter = () => {
    if (collapsable.current) {
      collapsable.current.style.maxHeight = `${collapsable.current.scrollHeight}px`
    }
  }

  const onMouseLeave = () => {
    if (collapsable.current) {
      collapsable.current.style.maxHeight = ''
    }
  }

  return (
    <div
      className="flex flex-col justify-start items-center text-center h-fit select-none transition duration-300 relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h1 className="text-6xl">{header}</h1>
      <div
        ref={collapsable}
        className="overflow-hidden max-h-0 transition-max-h duration-300 z-20"
      >
        {list.map((item, index) =>
          !isExpandedForced ? (
            typeof item === 'string' ? (
              <p className="text-3xl my-2">{item}</p>
            ) : (
              item
            )
          ) : null
        )}
      </div>
      <h2 className="text-3xl tracking-wider">{footer}</h2>
    </div>
  )
}
