export const siteMeta = {
  title: 'BinBot Todo',
  platform: 'macOS 10.15+',
  description: '简洁优雅的 macOS 待办事项管理工具，新版由 Mac 应用启动本地服务，在浏览器中管理待办。',
} as const

export const projectStatus = {
  available: true,
  label: 'v3.2.0 已发布',
  githubUrl: 'https://github.com/miyakowork/BinBotTodoOfficialPage',
} as const

export const release = {
  version: '3.2.0',
  architecture: 'Apple Silicon（arm64）',
  downloadUrl:
    'https://github.com/miyakowork/BinBotTodoOfficialPage/releases/download/v3.2.0/BinBot.Todo_3.2.0_aarch64.dmg',
  releaseUrl:
    'https://github.com/miyakowork/BinBotTodoOfficialPage/releases/tag/v3.2.0',
  signed: true,
  notarized: false,
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
  { title: '搜索即刻抵达', description: '标题与待办内容即时搜索，⌘K 聚焦输入，状态和标签继续筛选。' },
] as const

export const launcherReleaseNotice = 'v3.2.0 带来「轻盈专注」工作台：分组列表、常驻搜索与右侧详情，适配深色模式和窄窗口；AI 默认生成 1 个待办。'

export const faqItems = [
  {
    question: 'BinBot Todo 支持哪些平台？',
    answer: '应用专注于 macOS，最低支持 macOS 10.15。新版仍需安装 Mac 应用，由它启动本地服务，再通过这台 Mac 的浏览器使用 Todo。',
  },
  {
    question: '现在可以下载吗？',
    answer: `可以。官网现已提供 BinBot Todo v3.2.0，当前安装包适用于 Apple Silicon（arm64）Mac。${launcherReleaseNotice}`,
  },
  {
    question: '新版启动后怎么使用？',
    answer: '打开 BinBot Todo.app 后，应用会启动本地服务，并自动在默认浏览器中打开 Todo 工作台。无需另外安装 Node.js 或手动运行命令，也无需注册账号。需要再次打开页面时，可点击菜单栏图标中的“在浏览器中打开 Todo”，或使用已配置的全局快捷键。',
  },
  {
    question: '浏览器访问哪个地址？',
    answer: '新版首次启动默认访问 http://127.0.0.1:18420/，也支持同一端口的 localhost 地址。如果端口被占用，应用会自动选择空闲端口；请以菜单栏显示的实际地址为准。服务仅监听本机回环地址，其他设备无法通过局域网连接。',
  },
  {
    question: '关闭浏览器会停止应用吗？',
    answer: '不会。关闭 Todo 标签页或浏览器后，新版的本地服务仍在运行，可随时从菜单栏重新打开工作台。要停止服务，请选择“退出并停止服务”；退出后，本地页面将无法继续使用，重新启动 Mac 应用即可恢复。',
  },
  {
    question: '首次打开为什么会出现安全提示？',
    answer: '当前 v3.2.0 安装包已完成 ad-hoc 应用包签名，但未使用 Apple Developer ID 且未经公证。首次打开时如出现安全提示，可在系统设置的“隐私与安全性”中选择“仍要打开”。',
  },
  {
    question: '数据会上传到云端吗？',
    answer: '任务、标签、附件和设置保存在你的 Mac 本地。浏览器是新版的操作界面，数据仍由 Mac 应用保存在本地，不会因为改用浏览器就上传到云端。应用目前不提供云同步；启用 AI 时，相关请求会发送给你配置的服务商。',
  },
  {
    question: '使用新版需要联网吗？',
    answer: '启动本地服务和使用基础待办功能无需联网。localhost 和 127.0.0.1 都指向当前 Mac；可选 AI 服务和外部链接需要网络连接。',
  },
  {
    question: 'AI 功能必须使用吗？',
    answer: '不需要。AI 完全可选，关闭后仍可使用全部基础待办功能；启用时由你选择服务商并提供 API Key。',
  },
  {
    question: 'AI 可以指定生成多少个待办吗？',
    answer: '可以。v3.2.0 默认生成 1 个待办，也可通过数量输入框或加减按钮指定 1–50 个。提示词要求严格匹配数量，程序也会校验有效待办的条数；数量不符时自动纠正一次，仍不符则显示错误，不进入添加预览。',
  },
  {
    question: '可以备份自己的数据吗？',
    answer: '可以。完整备份使用 .binbottodo 文件，包含待办、标签和图片附件，导入时可选择合并或替换。也支持 JSON 数据导入导出和便于阅读的 Markdown 导出；要保留图片附件，请使用完整备份。',
  },
] as const
