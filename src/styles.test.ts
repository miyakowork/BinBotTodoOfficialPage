import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

describe('visual system contract', () => {
  it('contains brand, responsive, focus, and reduced-motion rules', () => {
    const css = readFileSync(resolve(process.cwd(), 'src/styles.css'), 'utf8')

    expect(css).toContain('--brand: #1877f2')
    expect(css).toContain(':focus-visible')
    expect(css).toContain('@media (max-width: 720px)')
    expect(css).toContain('prefers-reduced-motion: reduce')
  })

  it('keeps demo content readable and animations finite', () => {
    const css = readFileSync(resolve(process.cwd(), 'src/styles.css'), 'utf8')

    expect(css).toContain('--ink-faint: #607087')
    expect(css).toMatch(/\.demo-checkbox\.active\s*\{[^}]*animation:(?![^;}]*infinite)/s)
    expect(css).toMatch(/@media \(max-width: 720px\)[\s\S]*\.demo-detail\s*\{[^}]*display:block/s)
  })
})
