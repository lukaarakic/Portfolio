import { ReactNode, useState } from 'react'

interface CopyButtonProps {
  className?: string
  tooltipClassName?: string
  children: ReactNode
  copyValue: string
}

const CopyButton = ({
  className,
  children,
  copyValue,
  tooltipClassName,
}: CopyButtonProps) => {
  const [opacity, setOpacity] = useState(0)

  function copyToClipboard() {
    navigator.clipboard.writeText(copyValue)
    setOpacity(1)

    setTimeout(() => {
      setOpacity(0)
    }, 1500)
  }

  return (
    <button
      className={`fake-button relative ${className}`}
      onClick={copyToClipboard}
    >
      {children}

      <div
        className={`text-14 left-1/2 -translate-x-1/2 rounded-xl absolute py-3 
        bg-zinc-100 text-zinc-800 w-[80%] -bottom-10 transition-opacity pointer-events-none ${tooltipClassName}`}
        style={{
          opacity: opacity,
        }}
      >
        Mail has been copied
      </div>
    </button>
  )
}
export default CopyButton
