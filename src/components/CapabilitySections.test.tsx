import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('product capability sections', () => {
  it('covers daily workflow, optional AI, and local data control', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: '任务很多，界面不必。' })).toBeVisible()
    expect(screen.getAllByText('今天').length).toBeGreaterThan(0)
    expect(screen.getByText('图片附件')).toBeVisible()
    expect(screen.getByRole('heading', { name: 'AI 是助手，不是前提。' })).toBeVisible()
    expect(screen.getByText('DeepSeek')).toBeVisible()
    expect(screen.getByText('通义千问 Qwen')).toBeVisible()
    expect(screen.getByText('生成待办')).toBeVisible()
    expect(screen.queryByRole('button', { name: /生成待办/ })).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '数据留在你的 Mac。' })).toBeVisible()
    expect(screen.getByText('导出 Markdown')).toBeVisible()
  })

  it('states the project status without exposing a download action', () => {
    render(<App />)

    expect(screen.getByText('持续开发中')).toBeVisible()
    expect(screen.getByRole('heading', { name: '下一次完成，从这里开始。' })).toBeVisible()
    expect(screen.queryByRole('link', { name: /下载/ })).not.toBeInTheDocument()
  })
})
