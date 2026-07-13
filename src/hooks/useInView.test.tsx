import { renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useInView } from './useInView'

describe('useInView', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('shows content when IntersectionObserver is unavailable', () => {
    vi.stubGlobal('IntersectionObserver', undefined)

    const { result } = renderHook(() => useInView<HTMLDivElement>())

    expect(result.current.isInView).toBe(true)
  })
})
