import BrandMark from './BrandMark'
import ProjectLink from './ProjectLink'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <a className="footer-brand" href="#top"><BrandMark /><span><strong>BinBot Todo</strong><small>把今天，安排得刚刚好。</small></span></a>
        <p>Mac 启动 · 浏览器使用 · 数据本地保存</p>
        <ProjectLink>查看 GitHub <span aria-hidden="true">↗</span></ProjectLink>
      </div>
    </footer>
  )
}
