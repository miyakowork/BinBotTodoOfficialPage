import { useEffect, useRef, useState } from 'react'
import { navigationItems } from '../content/site'
import BrandMark from './BrandMark'
import ProjectLink from './ProjectLink'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand-link" href="#top" aria-label="BinBot Todo 首页">
          <BrandMark />
          <span>BinBot Todo</span>
        </a>

        <nav className="desktop-nav" aria-label="主导航">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <ProjectLink className="nav-project-link">查看 GitHub</ProjectLink>
          <button
            ref={triggerRef}
            className="menu-trigger"
            type="button"
            aria-label={open ? '关闭导航' : '打开导航'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="移动导航">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <ProjectLink>查看 GitHub</ProjectLink>
        </nav>
      )}
    </header>
  )
}
