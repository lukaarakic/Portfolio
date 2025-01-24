import Send from '../assets/mail-send.svg?react'

const ContactButton = ({ id }: { id?: string }) => {
  return (
    <a
      id={id}
      href="mailto:hello@lukarakic.me"
      className="fake-button group w-fit gap-3 bg-slate-300 text-18 font-medium text-zinc-800"
    >
      Contact me
      <Send className="w-10 text-zinc-800 transition-transform group-hover:translate-x-2" />
    </a>
  )
}
export default ContactButton
