import SectionIntro from './SectionIntro'

export default function LocalFirstSection() {
  return (
    <section className="local-section page-section" id="local">
      <div className="section-shell local-grid">
        <div className="local-visual" aria-label="本地数据与 macOS 原生能力演示">
          <div className="mac-orbit orbit-one" aria-hidden="true" />
          <div className="mac-orbit orbit-two" aria-hidden="true" />
          <div className="mac-core">
            <span className="mac-symbol">⌘</span>
            <strong>你的 Mac</strong>
            <small>任务与附件保存在本地</small>
          </div>
          <div className="orbit-pill pill-theme"><span>◐</span> 跟随系统主题</div>
          <div className="orbit-pill pill-shortcut"><span>⌘</span> 全局快捷键</div>
          <div className="orbit-pill pill-database"><span>▤</span> 本地数据库</div>
        </div>

        <div className="local-copy">
          <SectionIntro
            eyebrow="04 · 本地与原生"
            title="数据留在你的 Mac。"
            description="没有账号，没有云端前置条件。任务、标签、附件和设置都保存在你的设备上。"
          />
          <div className="local-points">
            <div><span>01</span><p><strong>打开就用</strong>无需注册，启动应用就能开始记录。</p></div>
            <div><span>02</span><p><strong>融入系统</strong>浅色、深色或跟随系统，始终自然。</p></div>
            <div><span>03</span><p><strong>一键唤起</strong>设置自己的全局快捷键，随时回到任务。</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
