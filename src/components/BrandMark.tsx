interface BrandMarkProps {
  className?: string
}

export default function BrandMark({ className = '' }: BrandMarkProps) {
  return (
    <span className={`brand-mark ${className}`} aria-hidden="true">
      <img src={`${import.meta.env.BASE_URL}binbot-todo.png`} alt="" />
    </span>
  )
}
