import BrandMark from './BrandMark'
import ProjectLink from './ProjectLink'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <a className="footer-brand" href="#top"><BrandMark /><span><strong>BinBot Todo</strong><small>把今天，安排得刚刚好。</small></span></a>
        <p>为 macOS 打造 · 本地优先 · 持续开发中</p>
        <ProjectLink>查看 GitHub <span aria-hidden="true">↗</span></ProjectLink>
      </div>
    </footer>
  )
}
