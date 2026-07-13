import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

describe('GitHub Pages deployment', () => {
  it('builds and deploys the production artifact from main', () => {
    const workflowPath = resolve('.github/workflows/deploy-pages.yml')

    expect(existsSync(workflowPath)).toBe(true)

    const workflow = readFileSync(workflowPath, 'utf8')
    expect(workflow).toContain('npm ci')
    expect(workflow).toContain('npm run build')
    expect(workflow).toContain('actions/upload-pages-artifact@v4')
    expect(workflow).toContain('actions/deploy-pages@v4')
    expect(workflow).toContain('path: ./dist')
  })
})
