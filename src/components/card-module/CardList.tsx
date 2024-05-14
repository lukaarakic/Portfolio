import { ReactNode } from 'react'

const CardList = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={`flex w-full items-center justify-between ${className}`}>
      {children}
    </div>
  )
}
export default CardList
