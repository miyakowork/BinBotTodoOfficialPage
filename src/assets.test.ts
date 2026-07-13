import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

describe('product assets and metadata', () => {
  it('ships the official local product icon and accurate metadata', () => {
    expect(existsSync(resolve('public/binbot-todo.png'))).toBe(true)

    const html = readFileSync(resolve('index.html'), 'utf8')
    expect(html).toContain('把今天，安排得刚刚好。')
    expect(html).toContain('/BinBotTodoOfficialPage/binbot-todo.png')
    expect(html).toContain('简洁优雅的 macOS 待办事项管理工具')
  })
})
