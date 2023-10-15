type Props = {
  children: React.ReactNode
  href: string
}

export const LinkText = ({ children, href }: Props) => {
  return (
    <a href={href} className="text-blue-700 underline">
      {children}
    </a>
  )
}
