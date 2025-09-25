/// <reference types="vite-plugin-svgr/client" />

import { useState } from 'react'

interface CopyButtonProps {
  className?: string
  tooltipClassName?: string
  copyValue: string
}

const CopyButton = ({
  className,
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
      hello@lukarakic.me
      <div
        className={`pointer-events-none absolute -bottom-10 left-1/2 w-[80%] -translate-x-1/2
          rounded-xl bg-zinc-100 py-3 text-14 text-zinc-800 transition-opacity ${tooltipClassName}`}
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
