export default function DataControlSection() {
  return (
    <section className="data-section page-section">
      <div className="section-shell data-card">
        <div className="data-copy">
          <p className="section-eyebrow">05 · 随时带走</p>
          <h2>你的清单，始终属于你。</h2>
          <p>用 .binbottodo 完整备份保存待办、标签和图片附件；也可导出 JSON 数据，或用 Markdown 分享与归档。</p>
        </div>
        <div className="export-stack" aria-label="数据导出演示">
          <div className="export-file file-json"><span>备份</span><div><strong>完整备份 .binbottodo</strong><small>待办、标签和图片附件</small></div><i>↓</i></div>
          <div className="export-file file-json"><span>{'{ }'}</span><div><strong>导出 JSON</strong><small>待办与标签数据交换</small></div><i>↓</i></div>
          <div className="export-file file-md"><span>MD</span><div><strong>导出 Markdown</strong><small>清晰、可读、可分享</small></div><i>↓</i></div>
        </div>
      </div>
    </section>
  )
}
