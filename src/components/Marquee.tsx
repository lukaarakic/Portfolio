import { SendIcon } from './SVGIcons'

interface MarqueeProps {
  text?: string
  className?: string
}

const Marquee = ({ text = "Let's Connect", className = '' }: MarqueeProps) => {
  // Create multiple instances for seamless scrolling
  const marqueeContent = (
    <div className="flex gap-20 whitespace-nowrap">
      {Array(12)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-20 whitespace-nowrap"
          >
            <span className="text-[9.6rem] font-medium text-zinc-100">
              {text}
            </span>
            <SendIcon className="aspect-square w-24 text-zinc-100" />
          </div>
        ))}
    </div>
  )

  return (
    <div
      className={`marquee-container group relative overflow-hidden py-6 ${className}`}
    >
      <div className="marquee-background"></div>
      <div className="relative z-10 flex animate-marquee">
        {marqueeContent}
        {marqueeContent}
      </div>
    </div>
  )
}

export default Marquee
