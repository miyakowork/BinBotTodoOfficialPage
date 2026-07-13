import { useEffect, useRef, useState } from 'react'

interface InViewOptions {
  rootMargin?: string
  threshold?: number
}

export function useInView<T extends Element>({
  rootMargin = '0px 0px -8% 0px',
  threshold = 0.12,
}: InViewOptions = {}) {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(() => {
    if (typeof IntersectionObserver === 'undefined') return true
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  })

  useEffect(() => {
    if (isInView || !ref.current || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsInView(true)
        observer.disconnect()
      },
      { rootMargin, threshold },
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isInView, rootMargin, threshold])

  return { ref, isInView }
}
