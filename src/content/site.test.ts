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
    expect(projectStatus.label).toBe('v3.0.1 已发布')
    expect(release).toEqual({
      version: '3.0.1',
      architecture: 'Apple Silicon（arm64）',
      downloadUrl:
        'https://github.com/miyakowork/BinBotTodoOfficialPage/releases/download/v3.0.1/BinBot.Todo_3.0.1_aarch64.dmg',
      releaseUrl:
        'https://github.com/miyakowork/BinBotTodoOfficialPage/releases/tag/v3.0.1',
      signed: false,
      notarized: false,
    })
    expect(navigationItems.map((item) => item.href)).toEqual([
      '#features',
      '#ai',
      '#local',
      '#faq',
    ])
    expect(faqItems.some((item) => item.answer.includes('v3.0.1'))).toBe(true)
    expect(faqItems.some((item) => item.answer.includes('Apple Silicon'))).toBe(true)
    expect(faqItems.some((item) => item.answer.includes('未签名、未公证'))).toBe(true)
  })
})
