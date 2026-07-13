import { workflowItems } from '../content/site'
import SectionIntro from './SectionIntro'

export default function WorkflowSection() {
  return (
    <section className="workflow-section page-section" id="features">
      <div className="section-shell">
        <SectionIntro
          eyebrow="01 · 日常工作流"
          title="任务很多，界面不必。"
          description="从想到一件事，到安排它、找到它、完成它，路径始终短而清楚。"
        />

        <div className="workflow-stage">
          <div className="timeline-demo" aria-label="按时间整理待办演示">
            <div className="timeline-topline">
              <span>我的一天</span>
              <span className="search-pill">⌕ 搜索待办</span>
            </div>
            <div className="time-lane">
              <div className="time-label"><span className="sun-dot" />今天 · 3 项</div>
              <div className="timeline-task is-complete"><i>✓</i><span><strong>回复设计反馈</strong><small>09:30 · 工作</small></span></div>
              <div className="timeline-task"><i /><span><strong>整理产品发布清单</strong><small>18:00 · 紧急</small></span><em>!</em></div>
            </div>
            <div className="time-lane is-muted">
              <div className="time-label"><span className="moon-dot" />明天 · 2 项</div>
              <div className="timeline-task"><i /><span><strong>预约周末体检</strong><small>生活</small></span></div>
            </div>
          </div>

          <div className="workflow-notes">
            {workflowItems.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
