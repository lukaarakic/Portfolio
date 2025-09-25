const ContactButton = ({ id }: { id?: string }) => {
  return (
    <a
      id={id}
      href="mailto:hello@lukarakic.me"
      className="fake-button group w-fit gap-3 bg-slate-300 text-18 font-medium text-zinc-800"
    >
      Contact me
    </a>
  )
}
export default ContactButton
