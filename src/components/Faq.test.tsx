import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Faq from './Faq'

describe('Faq', () => {
  it('renders accessible FAQ disclosures', () => {
    render(<Faq />)

    expect(screen.getByText('BinBot Todo 支持哪些平台？').closest('summary')).not.toBeNull()
    expect(screen.getByText('现在可以下载吗？').closest('summary')).not.toBeNull()
    expect(screen.getByText('AI 功能必须使用吗？').closest('summary')).not.toBeNull()
  })
})
