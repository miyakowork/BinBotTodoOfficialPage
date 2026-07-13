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

export const workflowItems = [
  { title: '按时间看清今天', description: '今天、明天、本周与已过期自动分组。' },
  { title: '用标签保持秩序', description: '工作、生活或自己的分类方式，颜色一眼可辨。' },
  { title: '搜索即刻抵达', description: '标题与备注即时搜索，状态和标签继续筛选。' },
] as const

export const faqItems = [
  {
    question: 'BinBot Todo 支持哪些平台？',
    answer: '首版专注于 macOS，最低支持 macOS 10.15。',
  },
  {
    question: '现在可以下载吗？',
    answer: 'BinBot Todo 仍在持续开发中，目前还没有公开下载版本。',
  },
  {
    question: '数据会上传到云端吗？',
    answer: '任务、标签、附件和设置保存在你的 Mac 本地。应用目前不提供云同步。',
  },
  {
    question: 'AI 功能必须使用吗？',
    answer: '不需要。AI 完全可选，关闭后仍可使用全部基础待办功能；启用时由你选择服务商并提供 API Key。',
  },
  {
    question: '可以备份自己的数据吗？',
    answer: '可以。BinBot Todo 支持导出 JSON 备份和便于阅读的 Markdown 文件。',
  },
] as const
