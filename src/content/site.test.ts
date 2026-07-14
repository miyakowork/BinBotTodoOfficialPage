import { describe, expect, it } from 'vitest'
import { faqItems, navigationItems, projectStatus, release, siteMeta } from './site'

describe('site content', () => {
  it('keeps the product story accurate and release-safe', () => {
    expect(siteMeta.title).toBe('BinBot Todo')
    expect(siteMeta.platform).toBe('macOS 10.15+')
    expect(projectStatus.available).toBe(true)
    expect(projectStatus.githubUrl).toBe(
      'https://github.com/miyakowork/BinBotTodoOfficialPage',
    )
    expect(projectStatus.label).toBe('v3.0.3 已发布')
    expect(release).toEqual({
      version: '3.0.3',
      architecture: 'Apple Silicon（arm64）',
      downloadUrl:
        'https://github.com/miyakowork/BinBotTodoOfficialPage/releases/download/v3.0.3/BinBot.Todo_3.0.3_aarch64.dmg',
      releaseUrl:
        'https://github.com/miyakowork/BinBotTodoOfficialPage/releases/tag/v3.0.3',
      signed: true,
      notarized: false,
    })
    expect(navigationItems.map((item) => item.href)).toEqual([
      '#features',
      '#ai',
      '#local',
      '#faq',
    ])
    expect(faqItems.some((item) => item.answer.includes('v3.0.3'))).toBe(true)
    expect(faqItems.some((item) => item.answer.includes('Apple Silicon'))).toBe(true)
    expect(faqItems.some((item) => item.answer.includes('ad-hoc'))).toBe(true)
    expect(faqItems.some((item) => item.answer.includes('未使用 Apple Developer ID'))).toBe(true)
  })
})
