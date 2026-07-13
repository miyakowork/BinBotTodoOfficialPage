import { projectStatus } from '../content/site'
import BrandMark from './BrandMark'
import ProjectLink from './ProjectLink'

export default function ProjectStatus() {
  return (
    <section className="status-section page-section">
      <div className="section-shell status-card">
        <div className="status-art" aria-hidden="true">
          <BrandMark />
          <span className="status-ring ring-a" />
          <span className="status-ring ring-b" />
        </div>
        <div className="status-copy">
          <p className="status-label"><span /> {projectStatus.label}</p>
          <h2>下一次完成，从这里开始。</h2>
          <p>BinBot Todo 正在持续打磨。关注 GitHub，查看代码与最新进展。</p>
          <ProjectLink className="status-action">在 GitHub 上查看项目 <span aria-hidden="true">↗</span></ProjectLink>
        </div>
      </div>
    </section>
  )
}
