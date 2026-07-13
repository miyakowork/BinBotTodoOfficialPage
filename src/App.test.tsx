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
    expect(screen.queryByRole('link', { name: /下载/ })).not.toBeInTheDocument()
  })

  it('uses safe and consistent GitHub project links', () => {
    render(<App />)

    const links = screen.getAllByRole('link', { name: /关注项目进展|查看 GitHub/ })
    expect(links.length).toBeGreaterThan(0)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://github.com/miyakowork/BinBotTodo')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    })
  })
})
