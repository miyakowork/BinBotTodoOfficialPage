import SectionIntro from './SectionIntro'

export default function AISection() {
  return (
    <section className="ai-section page-section" id="ai">
      <div className="section-shell">
        <div className="ai-heading-row">
          <SectionIntro
            eyebrow="03 · 可选 AI"
            title="AI 是助手，不是前提。"
            description="需要时，让它把一段描述或一张截图拆成清楚的任务；不需要时，BinBot Todo 依然完整。"
          />
          <p className="ai-privacy-note"><span>◉</span> 由你选择服务商、模型和 API Key</p>
        </div>

        <div className="ai-workbench" aria-label="AI 生成待办演示">
          <div className="ai-prompt-panel">
            <div className="ai-panel-title"><span className="spark">✦</span><strong>说说你准备做什么</strong></div>
            <p>下周准备产品发布会，需要完成演示文稿、整理宣传素材，并给受邀客户发送通知。</p>
            <div className="prompt-attachment"><span>▧</span> 发布会清单.png</div>
            <div className="ai-input-footer"><span>支持文字与图片</span><span className="ai-generate-display">生成待办 <span>→</span></span></div>
          </div>

          <div className="ai-result-panel">
            <div className="result-header"><span>已整理为 3 项待办</span><span className="provider-switch"><b>DeepSeek</b><b>通义千问 Qwen</b></span></div>
            {[
              ['完成发布会演示文稿', '紧急', '今天'],
              ['整理宣传册与现场素材', '高', '明天'],
              ['发送客户邀请通知', '中', '本周'],
            ].map(([title, priority, due], index) => (
              <div className="result-task" key={title}>
                <span className="result-number">0{index + 1}</span>
                <div><strong>{title}</strong><small><i>{priority}</i>{due}</small></div>
                <span className="result-check" aria-hidden="true">✓</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
