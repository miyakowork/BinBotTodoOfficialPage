const tasks = [
  { title: '整理产品发布清单', meta: '今天 · 紧急', state: 'active' },
  { title: '预约周末体检', meta: '明天 · 生活', state: 'idle' },
  { title: '准备季度复盘', meta: '本周 · 工作', state: 'idle' },
]

export default function ProductWindow() {
  return (
    <section className="product-window" aria-label="BinBot Todo 任务工作台演示">
      <div className="window-chrome" aria-hidden="true">
        <span /><span /><span />
        <span className="window-title">BinBot Todo</span>
      </div>
      <div className="product-layout">
        <aside className="demo-sidebar" aria-label="任务筛选演示">
          <p className="demo-overline">任务</p>
          <div className="demo-filter is-selected"><span>全部</span><strong>12</strong></div>
          <div className="demo-filter"><span>待完成</span><strong>7</strong></div>
          <div className="demo-filter"><span>已完成</span><strong>5</strong></div>
          <p className="demo-overline tag-label">标签</p>
          <div className="demo-tag"><i className="tag-dot is-blue" />工作</div>
          <div className="demo-tag"><i className="tag-dot is-orange" />生活</div>
        </aside>

        <div className="demo-list">
          <div className="demo-list-header">
            <div><span className="demo-caption">全部待办</span><strong>今天要做什么？</strong></div>
            <span className="demo-add" aria-hidden="true">＋</span>
          </div>
          <p className="demo-group-label">今天</p>
          {tasks.map((task, index) => (
            <div className={`demo-task ${index === 0 ? 'is-active' : ''}`} key={task.title}>
              <span className={`demo-checkbox ${task.state}`} aria-hidden="true">
                {index === 0 ? '✓' : ''}
              </span>
              <span><strong>{task.title}</strong><small>{task.meta}</small></span>
            </div>
          ))}
        </div>

        <aside className="demo-detail" aria-label="任务详情演示">
          <p className="demo-overline">任务详情</p>
          <h3>整理产品发布清单</h3>
          <div className="detail-row"><span>优先级</span><strong className="priority urgent">紧急</strong></div>
          <div className="detail-row"><span>截止时间</span><strong>今天 18:00</strong></div>
          <div className="detail-row"><span>标签</span><strong className="inline-tag">工作</strong></div>
          <div className="detail-note">
            <span>备注</span>
            <p>确认发布说明、演示素材和客户通知。</p>
          </div>
          <div className="detail-attachment"><span aria-hidden="true">▧</span> 发布流程.png</div>
        </aside>
      </div>
    </section>
  )
}
