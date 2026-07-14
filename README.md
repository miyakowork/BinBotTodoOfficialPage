# BinBot Todo Official Page

BinBot Todo 的中文官方网站，以清晰、轻盈的方式介绍这款本地优先的 macOS 待办工具。

## 当前状态

BinBot Todo v3.0.1 已公开发布。官网提供 Apple Silicon（arm64）DMG 的直接下载入口，以及对应的 [GitHub Release](https://github.com/miyakowork/BinBotTodoOfficialPage/releases/tag/v3.0.1) 发布说明。

当前安装包未使用 Apple Developer ID 签名，也未经过 Apple 公证；首次打开时 macOS Gatekeeper 可能显示安全提示。

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
