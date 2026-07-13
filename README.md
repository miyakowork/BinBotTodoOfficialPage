# BinBot Todo Official Page

BinBot Todo 的中文官方网站，以清晰、轻盈的方式介绍这款本地优先的 macOS 待办工具。

## 当前状态

BinBot Todo 仍在持续开发中，目前没有公开下载版本。官网不会提供虚假的下载入口或发布日期；最新进展请查看 [BinBotTodo](https://github.com/miyakowork/BinBotTodo) 项目。

## 本地开发

```bash
npm install
npm run dev
```

## 验证

```bash
npm test -- --run
npm run build
```

生产构建输出到 `dist/`，Vite 基础路径为 `/BinBotTodoOfficialPage/`。

## 技术栈

- React 18
- TypeScript 5
- Vite 5
- Vitest 与 Testing Library

页面为纯静态站点，不依赖后端、远程图片、分析脚本或运行时第三方内容。
