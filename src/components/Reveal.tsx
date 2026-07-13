import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>()
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties

  return (
    <div ref={ref} className={`reveal ${className}`} data-visible={isInView} style={style}>
      {children}
    </div>
  )
}
