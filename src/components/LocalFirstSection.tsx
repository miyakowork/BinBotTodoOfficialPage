import SectionIntro from './SectionIntro'

export default function LocalFirstSection() {
  return (
    <section className="local-section page-section" id="local">
      <div className="section-shell local-grid">
        <div className="local-visual" aria-label="Mac 本地服务与浏览器工作台演示">
          <div className="mac-orbit orbit-one" aria-hidden="true" />
          <div className="mac-orbit orbit-two" aria-hidden="true" />
          <div className="mac-core">
            <span className="mac-symbol">⌘</span>
            <strong>你的 Mac</strong>
            <small>任务与附件保存在本地</small>
          </div>
          <div className="orbit-pill pill-theme"><span>↗</span> 浏览器工作台</div>
          <div className="orbit-pill pill-shortcut"><span>⌘</span> 全局快捷键</div>
          <div className="orbit-pill pill-database"><span>▤</span> 本地数据库</div>
        </div>

        <div className="local-copy">
          <SectionIntro
            eyebrow="04 · 本地服务与浏览器"
            title="数据留在你的 Mac。"
            description="新版的 Mac 应用负责启动本地服务，浏览器负责呈现工作台。无需账号，任务、标签、附件和设置仍保存在你的设备上。"
          />
          <div className="local-points">
            <div><span>01</span><p><strong>启动即打开</strong>打开 Mac 应用，默认浏览器自动进入 Todo。</p></div>
            <div><span>02</span><p><strong>仅在本机访问</strong>默认地址为 127.0.0.1:18420，实际端口可在菜单栏查看。</p></div>
            <div><span>03</span><p><strong>菜单栏管理</strong>关闭标签页后服务继续运行；从菜单栏重新打开，或退出并停止服务。</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
