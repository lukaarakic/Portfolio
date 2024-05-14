import Send from '../assets/mail-send.svg?react'

const ContactButton = () => {
  return (
    <a
      href="mailto:hello@lukarakic.me"
      className="fake-button w-fit gap-2 bg-slate-300 text-18 font-medium text-zinc-800"
    >
      Contact me
      <Send className="w-10 text-zinc-800" />
    </a>
  )
}
export default ContactButton
