const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-fit items-center justify-center gap-6 rounded-10 border border-sky-500 bg-sky-800/50 px-8 py-6 font-medium capitalize leading-none text-zinc-100">
      <div className="h-5 w-5 rounded-full bg-sky-500"></div>
      <span className="text-20">{children}</span>
    </div>
  )
}

export default Badge
