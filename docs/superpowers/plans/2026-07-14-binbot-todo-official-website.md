# BinBot Todo Official Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, responsive Chinese product website that presents BinBot Todo as a clear, local-first macOS todo application and links visitors to its GitHub project.

**Architecture:** A static React 18 + TypeScript + Vite single page, split into focused presentation components. Product copy and project status live in one typed content module; responsive product demonstrations are semantic HTML/CSS rather than remote screenshots, and viewport motion is handled by a small reusable hook.

**Tech Stack:** React 18, TypeScript 5, Vite 5, Vitest 2, Testing Library, CSS, local static assets.

## Global Constraints

- The page language is Chinese and the product is positioned first as a macOS todo tool, not an AI product.
- The visual direction is “清澈原生”: ice white, mist blue, brand blue `#1877F2`, and restrained warm orange completion accents.
- The site has no backend, database, analytics, account system, email capture, or runtime remote content.
- The product has no public Release; do not render a download link, release date, countdown, or platform promise beyond macOS 10.15+.
- GitHub repository `https://github.com/miyakowork/BinBotTodo` is the only external conversion destination.
- JavaScript-disabled and Intersection Observer-unavailable states must keep primary content visible.
- Respect `prefers-reduced-motion`, keyboard navigation, visible focus, and semantic heading structure.

---

### Task 1: Project foundation and typed content

**Files:**
- Create: `package.json`
- Create: `package-lock.json` via `npm install`
- Create: `index.html`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `src/vite-env.d.ts`
- Create: `src/setupTests.ts`
- Create: `src/content/site.ts`
- Test: `src/content/site.test.ts`

**Interfaces:**
- Produces: `siteMeta`, `navigationItems`, `workflowItems`, `faqItems`, and `projectStatus` constants consumed by all presentation components.
- Produces: Vite aliases and Vitest jsdom configuration used by later tests.

- [ ] **Step 1: Write the failing content contract test**

```ts
import { describe, expect, it } from 'vitest'
import { faqItems, navigationItems, projectStatus, siteMeta } from './site'

describe('site content', () => {
  it('keeps the product story accurate and release-safe', () => {
    expect(siteMeta.title).toBe('BinBot Todo')
    expect(siteMeta.platform).toBe('macOS 10.15+')
    expect(projectStatus.available).toBe(false)
    expect(projectStatus.githubUrl).toBe('https://github.com/miyakowork/BinBotTodo')
    expect(navigationItems.map((item) => item.href)).toEqual([
      '#features', '#ai', '#local', '#faq',
    ])
    expect(faqItems.some((item) => item.answer.includes('持续开发中'))).toBe(true)
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- --run src/content/site.test.ts`

Expected: FAIL because the Vite project and `src/content/site.ts` do not exist.

- [ ] **Step 3: Add the minimal Vite/Vitest project and content module**

Create scripts `dev`, `build`, `test`, and `preview`; use React 18.3.1, Vite 5.4.x, TypeScript 5.7.x, Vitest 2.1.x, jsdom, and Testing Library. Configure `base: '/BinBotTodoOfficialPage/'` for static hosting compatibility.

```ts
export const siteMeta = {
  title: 'BinBot Todo',
  platform: 'macOS 10.15+',
  description: '简洁优雅的 macOS 待办事项管理工具',
} as const

export const projectStatus = {
  available: false,
  label: '持续开发中',
  githubUrl: 'https://github.com/miyakowork/BinBotTodo',
} as const

export const navigationItems = [
  { label: '功能', href: '#features' },
  { label: 'AI', href: '#ai' },
  { label: '本地数据', href: '#local' },
  { label: '常见问题', href: '#faq' },
] as const
```

- [ ] **Step 4: Run the content test and production build**

Run: `npm test -- --run src/content/site.test.ts && npm run build`

Expected: the content test passes; the build may still fail only because `src/main.tsx` is intentionally created in Task 2. If it fails for another reason, fix the foundation before proceeding.

- [ ] **Step 5: Commit the foundation**

```bash
git add package.json package-lock.json index.html tsconfig*.json vite.config.ts src/vite-env.d.ts src/setupTests.ts src/content
git commit -m "build: scaffold BinBot Todo website"
```

### Task 2: Accessible shell, navigation, hero, and product window

**Files:**
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/components/BrandMark.tsx`
- Create: `src/components/Navigation.tsx`
- Create: `src/components/Hero.tsx`
- Create: `src/components/ProductWindow.tsx`
- Create: `src/components/ProjectLink.tsx`
- Test: `src/components/Navigation.test.tsx`
- Test: `src/App.test.tsx`

**Interfaces:**
- `ProjectLink({ className?, children }: Props)` always points to `projectStatus.githubUrl` with `target="_blank"` and `rel="noreferrer"`.
- `Navigation()` consumes `navigationItems` and owns mobile-menu state.
- `ProductWindow({ compact?: boolean })` renders an accessible region labeled `BinBot Todo 任务工作台演示`.
- `Hero()` composes `BrandMark`, `ProjectLink`, and `ProductWindow`.

- [ ] **Step 1: Write failing navigation and app-story tests**

```tsx
it('opens and closes the mobile navigation accessibly', async () => {
  const user = userEvent.setup()
  render(<Navigation />)
  const trigger = screen.getByRole('button', { name: '打开导航' })
  await user.click(trigger)
  expect(trigger).toHaveAttribute('aria-expanded', 'true')
  await user.keyboard('{Escape}')
  expect(trigger).toHaveAttribute('aria-expanded', 'false')
})

it('presents BinBot Todo as a macOS todo tool', () => {
  render(<App />)
  expect(screen.getByRole('heading', { level: 1, name: '把今天，安排得刚刚好。' })).toBeVisible()
  expect(screen.getByText('简洁优雅的 macOS 待办工具')).toBeVisible()
  expect(screen.getByRole('region', { name: 'BinBot Todo 任务工作台演示' })).toBeVisible()
  expect(screen.queryByRole('link', { name: /下载/ })).not.toBeInTheDocument()
})
```

- [ ] **Step 2: Run the focused tests to verify they fail**

Run: `npm test -- --run src/components/Navigation.test.tsx src/App.test.tsx`

Expected: FAIL because the components do not exist.

- [ ] **Step 3: Implement the page shell and accessible navigation**

Use a semantic `<header>`, `<nav aria-label="主导航">`, menu button with `aria-expanded`, and Escape key cleanup. `App` renders `Navigation`, `<main>`, and the remaining components as they are added.

```tsx
export default function App() {
  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <Hero />
      </main>
    </div>
  )
}
```

- [ ] **Step 4: Implement the hero and semantic product window**

The hero contains the approved headline, the label `简洁优雅的 macOS 待办工具`, an internal `#features` link, and a GitHub project link. The product window renders sidebar filters, grouped tasks, priorities, tags, and a task detail pane with decorative controls hidden from assistive technology.

- [ ] **Step 5: Run focused tests and build**

Run: `npm test -- --run src/components/Navigation.test.tsx src/App.test.tsx && npm run build`

Expected: all focused tests pass and Vite writes `dist/` without TypeScript errors.

- [ ] **Step 6: Commit the shell**

```bash
git add src/main.tsx src/App.tsx src/components
git commit -m "feat: add accessible hero and product showcase"
```

### Task 3: Product narrative sections, FAQ, and local-first story

**Files:**
- Create: `src/components/SectionIntro.tsx`
- Create: `src/components/WorkflowSection.tsx`
- Create: `src/components/TaskDetailSection.tsx`
- Create: `src/components/AISection.tsx`
- Create: `src/components/LocalFirstSection.tsx`
- Create: `src/components/DataControlSection.tsx`
- Create: `src/components/ProjectStatus.tsx`
- Create: `src/components/Faq.tsx`
- Create: `src/components/Footer.tsx`
- Modify: `src/App.tsx`
- Test: `src/components/CapabilitySections.test.tsx`
- Test: `src/components/Faq.test.tsx`

**Interfaces:**
- `SectionIntro({ eyebrow, title, description })` provides consistent section headings.
- Each capability component renders one section with the IDs from `navigationItems`.
- `Faq()` consumes `faqItems` and uses native `<details>` / `<summary>` semantics.

- [ ] **Step 1: Write failing capability and FAQ tests**

```tsx
it('covers daily workflow, optional AI, and local data control', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: '任务很多，界面不必。' })).toBeVisible()
  expect(screen.getByText('今天')).toBeVisible()
  expect(screen.getByText('图片附件')).toBeVisible()
  expect(screen.getByRole('heading', { name: 'AI 是助手，不是前提。' })).toBeVisible()
  expect(screen.getByText('DeepSeek')).toBeVisible()
  expect(screen.getByText('通义千问 Qwen')).toBeVisible()
  expect(screen.getByRole('heading', { name: '数据留在你的 Mac。' })).toBeVisible()
  expect(screen.getByText('导出 Markdown')).toBeVisible()
})

it('renders accessible FAQ disclosures', () => {
  render(<Faq />)
  expect(screen.getByText('BinBot Todo 支持哪些平台？').closest('summary')).not.toBeNull()
  expect(screen.getByText('现在可以下载吗？').closest('summary')).not.toBeNull()
})
```

- [ ] **Step 2: Run focused tests to verify they fail**

Run: `npm test -- --run src/components/CapabilitySections.test.tsx src/components/Faq.test.tsx`

Expected: FAIL because the narrative components do not exist.

- [ ] **Step 3: Implement the narrative components**

Use alternating editorial layouts rather than a repeated generic card grid. Recreate real BinBot Todo controls: time groups, checkbox states, priority chips, tag pills, attachment thumbnails, AI result rows, theme switcher, and export actions. Keep all examples clearly demonstrative and non-editable.

- [ ] **Step 4: Add project status, FAQ, and footer**

`ProjectStatus` says `持续开发中` and links to GitHub. `Faq` answers platform, macOS 10.15+, local data, optional AI/API keys, open-source project, and no-current-download status without guessing dates.

- [ ] **Step 5: Compose every section in App and run tests**

Run: `npm test -- --run src/components/CapabilitySections.test.tsx src/components/Faq.test.tsx src/App.test.tsx`

Expected: all narrative, FAQ, and app tests pass.

- [ ] **Step 6: Commit the complete content story**

```bash
git add src/App.tsx src/components src/content/site.ts src/content/site.test.ts
git commit -m "feat: tell the complete BinBot Todo product story"
```

### Task 4: Clear-native visual system, reveal motion, and responsive behavior

**Files:**
- Create: `src/styles.css`
- Create: `src/hooks/useInView.ts`
- Create: `src/components/Reveal.tsx`
- Modify: all presentation components to apply stable class names and `Reveal`
- Test: `src/hooks/useInView.test.tsx`
- Test: `src/styles.test.ts`

**Interfaces:**
- `useInView<T extends Element>(options?): { ref: RefObject<T>; isInView: boolean }` returns visible by default when Intersection Observer is unavailable.
- `Reveal({ children, className?, delay? })` uses the hook and writes `data-visible` for CSS transitions.

- [ ] **Step 1: Write failing motion and stylesheet contract tests**

```tsx
it('shows content when IntersectionObserver is unavailable', () => {
  vi.stubGlobal('IntersectionObserver', undefined)
  const { result } = renderHook(() => useInView<HTMLDivElement>())
  expect(result.current.isInView).toBe(true)
})
```

```ts
it('contains brand, responsive, focus, and reduced-motion rules', () => {
  const css = readFileSync(new URL('./styles.css', import.meta.url), 'utf8')
  expect(css).toContain('--brand: #1877f2')
  expect(css).toContain(':focus-visible')
  expect(css).toContain('@media (max-width: 720px)')
  expect(css).toContain('prefers-reduced-motion: reduce')
})
```

- [ ] **Step 2: Run focused tests to verify they fail**

Run: `npm test -- --run src/hooks/useInView.test.tsx src/styles.test.ts`

Expected: FAIL because the hook and stylesheet do not exist.

- [ ] **Step 3: Implement the reveal hook and primitive**

Observe each element once, disconnect after intersection, and immediately show content when the API is unavailable or reduced motion is requested.

- [ ] **Step 4: Implement the full visual system**

Define brand variables, local font stack, mist-blue backgrounds, subtle dot texture, translucent navigation, asymmetric section grids, realistic product-window chrome, task control states, and a warm orange completion accent. Add explicit desktop, tablet, and mobile layouts; on mobile, reshape the desktop three-pane window into readable list/detail cards.

- [ ] **Step 5: Add accessibility and reduced-motion CSS**

Ensure minimum 44px interactive targets where practical, strong `:focus-visible` outlines, safe text contrast, scroll-margin for anchored sections, and no nonessential transition/transform under reduced motion.

- [ ] **Step 6: Run all tests and build**

Run: `npm test -- --run && npm run build`

Expected: all tests pass and the production build succeeds.

- [ ] **Step 7: Commit the visual system**

```bash
git add src/styles.css src/hooks src/components
git commit -m "feat: add clear-native responsive visual system"
```

### Task 5: Product assets, metadata, and visual verification

**Files:**
- Create: `public/binbot-todo.png` copied from `../BinBotTodo/src-tauri/icons/icon.png`
- Modify: `index.html`
- Modify: `README.md`
- Test: `src/assets.test.ts`

**Interfaces:**
- `public/binbot-todo.png` is the favicon/social identity source referenced by `index.html` and `BrandMark`.
- `README.md` documents local development, tests, build, and current no-download status.

- [ ] **Step 1: Write the failing asset and metadata test**

```ts
it('ships the official local product icon and accurate metadata', () => {
  expect(existsSync(resolve('public/binbot-todo.png'))).toBe(true)
  const html = readFileSync(resolve('index.html'), 'utf8')
  expect(html).toContain('把今天，安排得刚刚好。')
  expect(html).toContain('/BinBotTodoOfficialPage/binbot-todo.png')
})
```

- [ ] **Step 2: Run the asset test to verify it fails**

Run: `npm test -- --run src/assets.test.ts`

Expected: FAIL because the public icon and final metadata are absent.

- [ ] **Step 3: Add the official icon, metadata, and documentation**

Copy the existing BinBot Todo icon without modifying the source project. Add Chinese title, description, theme color, favicon, canonical GitHub project metadata where appropriate, and a README with `npm install`, `npm run dev`, `npm test -- --run`, and `npm run build`.

- [ ] **Step 4: Run automated verification**

Run: `npm test -- --run && npm run build && git diff --check`

Expected: all tests pass, Vite builds successfully, and no whitespace errors are reported.

- [ ] **Step 5: Run visual and interaction verification**

Serve the production build locally and capture 1440×1000, 768×1024, and 390×844 screenshots. Check no horizontal overflow, readable product demonstrations, working mobile menu and FAQ, visible keyboard focus, accurate GitHub targets, and reduced-motion behavior. Fix any defects and rerun the full automated verification.

- [ ] **Step 6: Commit the finished site**

```bash
git add public index.html README.md src
git commit -m "docs: finish BinBot Todo website delivery"
```

- [ ] **Step 7: Push the verified main branch**

Run: `git push -u origin main`

Expected: GitHub accepts the commits and `origin/main` points to the locally verified commit.
