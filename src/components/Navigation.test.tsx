import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('opens and closes the mobile navigation accessibly', async () => {
    const user = userEvent.setup()
    render(<Navigation />)

    const trigger = screen.getByRole('button', { name: '打开导航' })
    await user.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: '移动导航' })).toBeVisible()

    screen.getByRole('navigation', { name: '移动导航' }).querySelector('a')?.focus()

    await user.keyboard('{Escape}')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveFocus()
  })
})
