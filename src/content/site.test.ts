import { describe, expect, it } from 'vitest'
import { faqItems, launcherReleaseNotice, navigationItems, projectStatus, release, siteMeta } from './site'

describe('site content', () => {
  it('keeps the product story accurate and release-safe', () => {
    expect(siteMeta.title).toBe('BinBot Todo')
    expect(siteMeta.platform).toBe('macOS 10.15+')
    expect(projectStatus.available).toBe(true)
    expect(projectStatus.githubUrl).toBe(
      'https://github.com/miyakowork/BinBotTodoOfficialPage',
    )
    expect(projectStatus.label).toBe('v3.0.5 已发布')
    expect(release).toEqual({
      version: '3.0.5',
      architecture: 'Apple Silicon（arm64）',
      downloadUrl:
        'https://github.com/miyakowork/BinBotTodoOfficialPage/releases/download/v3.0.5/BinBot.Todo_3.0.5_aarch64.dmg',
      releaseUrl:
        'https://github.com/miyakowork/BinBotTodoOfficialPage/releases/tag/v3.0.5',
      signed: true,
      notarized: false,
    })
    expect(navigationItems.map((item) => item.href)).toEqual([
      '#features',
      '#ai',
      '#local',
      '#faq',
    ])
    expect(faqItems.some((item) => item.answer.includes('v3.0.5'))).toBe(true)
    expect(faqItems.some((item) => item.answer.includes('Apple Silicon'))).toBe(true)
    expect(faqItems.some((item) => item.answer.includes('ad-hoc'))).toBe(true)
    expect(faqItems.some((item) => item.answer.includes('未使用 Apple Developer ID'))).toBe(true)
    expect(faqItems.find((item) => item.question === '现在可以下载吗？')?.answer).toContain(launcherReleaseNotice)
    const address = faqItems.find((item) => item.question === '浏览器访问哪个地址？')?.answer
    expect(address).toContain('http://127.0.0.1:18420/')
    expect(address).toContain('localhost')
    expect(address).toContain('菜单栏显示的实际地址')
    expect(address).toContain('仅监听本机回环地址')
    const lifecycle = faqItems.find((item) => item.question === '关闭浏览器会停止应用吗？')?.answer
    expect(lifecycle).toContain('本地服务仍在运行')
    expect(lifecycle).toContain('退出并停止服务')
  })
})
