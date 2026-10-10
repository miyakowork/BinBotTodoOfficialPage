# BinBot Todo Official Page

BinBot Todo 的中文官方网站，介绍本地优先的待办工具及新版的「macOS 启动器 + 浏览器工作台」使用方式。

官方网站：[https://miyakowork.github.io/BinBotTodoOfficialPage/](https://miyakowork.github.io/BinBotTodoOfficialPage/)

## 当前状态

BinBot Todo v3.0.5 已公开发布。官网提供 Apple Silicon（arm64）DMG 的直接下载入口，以及对应的 [GitHub Release](https://github.com/miyakowork/BinBotTodoOfficialPage/releases/tag/v3.0.5) 发布说明。

浏览器启动器新版待发布。当前下载仍为 v3.0.5 应用内窗口版；页面在首页、下载区与 FAQ 中明确区分新版说明和现有安装包。发布新版后，应同步更新 `src/content/site.ts` 的版本、下载链接及版本提示。

当前安装包使用 ad-hoc 签名，但未使用 Apple Developer ID、也未经过 Apple 公证；首次打开时 macOS Gatekeeper 可能显示安全提示。

## 新版使用方式

- 打开 BinBot Todo.app，自动启动本地服务并在默认浏览器中打开 Todo；无需另装 Node.js。
- 首次默认地址为 `http://127.0.0.1:18420/`，同一端口也支持 `localhost`。端口占用时会自动选择空闲端口，以菜单栏显示的实际地址为准。
- 服务仅监听本机回环地址，任务、标签、附件和设置仍保存在 Mac 本地；基础待办功能无需联网，AI 可选。
- 关闭浏览器后服务继续运行；从菜单栏重新打开页面，或选择「退出并停止服务」。
- 使用 `.binbottodo` 完整备份保留图片附件，也支持 JSON 数据交换和 Markdown 导出。

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
