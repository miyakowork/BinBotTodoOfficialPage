export default function ProductWindow() {
  return (
    <section className="product-window" aria-label="BinBot Todo 任务工作台演示">
      <div className="window-chrome" aria-hidden="true">
        <span /><span /><span />
        <span className="window-title">127.0.0.1:18420 · 专注编辑工作台</span>
      </div>
      <picture>
        <source media="(max-width: 720px)" srcSet={`${import.meta.env.BASE_URL}workspace-narrow.png`} width="390" height="844" />
        <img
          className="product-screenshot"
          src={`${import.meta.env.BASE_URL}workspace-desktop.png`}
          width="1280"
          height="720"
          alt="BinBot Todo v3.3.0 实际界面：新增与编辑占主要视图，左侧紧凑待办列表，右侧内容与属性分栏。"
        />
      </picture>
    </section>
  )
}
