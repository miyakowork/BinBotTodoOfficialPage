import ProductWindow from './ProductWindow'
import ProjectLink from './ProjectLink'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow"><span /> 简洁优雅的 macOS 待办工具</p>
        <h1>把今天，安排得刚刚好。</h1>
        <p className="hero-description">
          任务、标签、截止时间和每一个细节，都在一张清楚安静的工作台上。
          BinBot Todo 让你专注完成，而不是忙着整理。
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#features">看看它如何工作 <span aria-hidden="true">↓</span></a>
          <ProjectLink className="secondary-action">关注项目进展 <span aria-hidden="true">↗</span></ProjectLink>
        </div>
        <div className="hero-proof" aria-label="产品特点">
          <span>本地优先</span><i />
          <span>原生 Mac 体验</span><i />
          <span>AI 可选</span>
        </div>
      </div>
      <div className="hero-product">
        <ProductWindow />
      </div>
    </section>
  )
}
