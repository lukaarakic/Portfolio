/// <reference types="vite-plugin-svgr/client" />

import Copy from '../assets/file-copy.svg?react'
import ContactButton from './ContactButton'
import CopyButton from './CopyButton'

const Footer = () => {
  const time = new Intl.DateTimeFormat([], {
    timeZone: 'Europe/Belgrade',
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date())

  return (
    <footer className="rounded-40 bg-zinc-800 px-24 py-16">
      <div className="pb-96">
        <h2 className="mb-7 text-64 font-medium">
          Project in <span className="text-zinc-100">mind?</span>
        </h2>

        <div className="flex items-center gap-6 text-18 font-medium text-zinc-100">
          <ContactButton />
          <div className="flex items-center gap-4">
            <span>or copy an email: </span>

            <CopyButton
              copyValue="hello@lukarakic.me"
              className="px-0"
              tooltipClassName="w-full"
            >
              <Copy className="w-8" />
              hello@lukarakic.me
            </CopyButton>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-zinc-500 pt-24">
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
          <div className="text-16 font-bold text-zinc-100">
            GitHub Instagram LinkedIn
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
