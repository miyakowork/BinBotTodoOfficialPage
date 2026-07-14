import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('presents BinBot Todo as a macOS todo tool', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: '把今天，安排得刚刚好。' }),
    ).toBeVisible()
    expect(screen.getByText('简洁优雅的 macOS 待办工具')).toBeVisible()
    expect(
      screen.getByRole('region', { name: 'BinBot Todo 任务工作台演示' }),
    ).toBeVisible()
    const downloadLinks = screen.getAllByRole('link', {
      name: '下载 macOS 版（Apple Silicon）',
    })
    expect(downloadLinks).toHaveLength(2)
    downloadLinks.forEach((link) => {
      expect(link).toHaveAttribute(
        'href',
        'https://github.com/miyakowork/BinBotTodoOfficialPage/releases/download/v3.0.3/BinBot.Todo_3.0.3_aarch64.dmg',
      )
    })

    const releaseLinks = screen.getAllByRole('link', { name: /查看发布说明/ })
    expect(releaseLinks).toHaveLength(2)
    releaseLinks.forEach((link) => {
      expect(link).toHaveAttribute(
        'href',
        'https://github.com/miyakowork/BinBotTodoOfficialPage/releases/tag/v3.0.3',
      )
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    })

    expect(screen.queryByText(/没有公开下载版本/)).not.toBeInTheDocument()
    expect(screen.getByText('v3.0.3 已发布')).toBeVisible()
  })

  it('uses safe and consistent GitHub project links', () => {
    render(<App />)

    const links = screen.getAllByRole('link', { name: /查看 GitHub/ })
    expect(links.length).toBeGreaterThan(0)
    links.forEach((link) => {
      expect(link).toHaveAttribute(
        'href',
        'https://github.com/miyakowork/BinBotTodoOfficialPage',
      )
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    })
  })
})
