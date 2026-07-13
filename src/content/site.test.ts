import { describe, expect, it } from 'vitest'
import { faqItems, navigationItems, projectStatus, siteMeta } from './site'

describe('site content', () => {
  it('keeps the product story accurate and release-safe', () => {
    expect(siteMeta.title).toBe('BinBot Todo')
    expect(siteMeta.platform).toBe('macOS 10.15+')
    expect(projectStatus.available).toBe(false)
    expect(projectStatus.githubUrl).toBe('https://github.com/miyakowork/BinBotTodo')
    expect(navigationItems.map((item) => item.href)).toEqual([
      '#features',
      '#ai',
      '#local',
      '#faq',
    ])
    expect(faqItems.some((item) => item.answer.includes('持续开发中'))).toBe(true)
  })
})
