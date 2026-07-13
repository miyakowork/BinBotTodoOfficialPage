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

export const workflowItems: ReadonlyArray<{
  title: string
  description: string
}> = []

export const faqItems = [
  {
    question: '现在可以下载吗？',
    answer: 'BinBot Todo 仍在持续开发中，目前还没有公开下载版本。',
  },
] as const
