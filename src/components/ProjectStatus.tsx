import { projectStatus, release } from '../content/site'
import BrandMark from './BrandMark'

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
          <h2>现在，就从这里开始。</h2>
          <p>v{release.version} 已开放下载，当前提供 {release.architecture} 版本。</p>
          <div className="status-actions">
            <a
              aria-label="下载 macOS 版（Apple Silicon）"
              className="status-action"
              href={release.downloadUrl}
            >
              下载 macOS 版 <span aria-hidden="true">↓</span>
            </a>
            <a
              className="status-release-link"
              href={release.releaseUrl}
              target="_blank"
              rel="noreferrer"
            >
              查看发布说明 <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="release-caution">未签名、未公证；首次打开时 macOS 可能显示安全提示。</p>
        </div>
      </div>
    </section>
  )
}
