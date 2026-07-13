export default function DataControlSection() {
  return (
    <section className="data-section page-section">
      <div className="section-shell data-card">
        <div className="data-copy">
          <p className="section-eyebrow">05 · 随时带走</p>
          <h2>你的清单，始终属于你。</h2>
          <p>需要备份时导出完整 JSON，需要分享或归档时生成清楚易读的 Markdown。</p>
        </div>
        <div className="export-stack" aria-label="数据导出演示">
          <div className="export-file file-json"><span>{'{ }'}</span><div><strong>导出 JSON</strong><small>完整数据备份</small></div><i>↓</i></div>
          <div className="export-file file-md"><span>MD</span><div><strong>导出 Markdown</strong><small>清晰、可读、可分享</small></div><i>↓</i></div>
        </div>
      </div>
    </section>
  )
}
