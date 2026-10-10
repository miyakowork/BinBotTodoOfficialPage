export default function ProductWindow() {
  return (
    <section className="product-window" aria-label="BinBot Todo 任务工作台演示">
      <div className="window-chrome" aria-hidden="true">
        <span /><span /><span />
        <span className="window-title">127.0.0.1:18420 · 轻盈专注工作台</span>
      </div>
      <picture>
        <source media="(max-width: 720px)" srcSet={`${import.meta.env.BASE_URL}workspace-narrow.png`} />
        <img
          className="product-screenshot"
          src={`${import.meta.env.BASE_URL}workspace-desktop.png`}
          width="1487"
          height="1058"
          alt="BinBot Todo v3.2.0 实际界面：今天，慢慢完成。分组列表、常驻搜索和右侧待办详情。"
        />
      </picture>
    </section>
  )
}
