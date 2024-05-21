import { useEffect, useState } from 'react'
import ContactButton from './ContactButton'
import CopyButton from './CopyButton'

import Github from '../assets/github.svg?react'
import Instagram from '../assets/instagram.svg?react'
import LinkedIn from '../assets/linkedin.svg?react'

const Footer = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    setInterval(() => {
      const currentTime = new Intl.DateTimeFormat([], {
        timeZone: 'Europe/Belgrade',
        hour: 'numeric',
        minute: 'numeric',
      }).format(new Date())

      setTime(currentTime)
    }, 1000)
  }, [])

  return (
    <footer className="rounded-40 bg-zinc-800 px-16 py-16 xs:px-24">
      <div className="pb-52 lg:pb-96">
        <h2 className="mb-7 text-40 font-medium md:text-64">
          Project in <span className="text-zinc-100">mind?</span>
        </h2>

        <div className="flex flex-col items-start gap-6 text-18 font-medium text-zinc-100 xs:flex-row xs:items-center">
          <ContactButton />
          <div className="flex flex-col items-start gap-4 xs:flex-row xs:items-center">
            <span>or copy an email: </span>

            <CopyButton
              copyValue="hello@lukarakic.me"
              className="px-0"
              tooltipClassName="w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex items-baseline justify-between border-t border-zinc-500 pt-24">
        <div>
          <div className="text-18 font-medium">Copyright</div>
          <div className="text-16 font-bold text-zinc-100">
            2024 © Luka Rakic
          </div>
        </div>

        <div>
          <div className="text-18 font-medium">Local time</div>
          <div className="text-16 font-bold text-zinc-100">{time}</div>
        </div>

        <div>
          <div className="text-18 font-medium">Socials</div>
          <div className="flex items-center gap-4 text-16 font-bold text-zinc-100">
            <a
              href="https://github.com/lukaarakic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/lukaarakic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className="w-12" />
            </a>
            <a
              href="https://www.instagram.com/lukaarakic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-12" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
