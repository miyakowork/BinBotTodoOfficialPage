interface BrandMarkProps {
  className?: string
}

export default function BrandMark({ className = '' }: BrandMarkProps) {
  return (
    <span className={`brand-mark ${className}`} aria-hidden="true">
      <svg viewBox="0 0 32 32" role="img">
        <rect width="32" height="32" rx="9" fill="currentColor" />
        <path
          d="m9.5 16.4 4.2 4.2 8.8-9"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.2"
        />
      </svg>
    </span>
  )
}
