import SectionIntro from './SectionIntro'

export default function TaskDetailSection() {
  return (
    <section className="detail-section page-section">
      <div className="section-shell split-section">
        <div className="detail-copy">
          <SectionIntro
            eyebrow="02 · 每一件事的上下文"
            title="不只记下一句话。"
            description="把完成任务真正需要的内容放在一起。下次打开时，不用重新回忆它从哪里开始。"
          />
          <div className="detail-feature-list">
            <div><span className="feature-icon">Aa</span><div><strong>备注与说明</strong><p>长内容与一句话备注各有位置。</p></div></div>
            <div><span className="feature-icon">↗</span><div><strong>相关链接</strong><p>粘贴 URL，和任务一起保存。</p></div></div>
            <div><span className="feature-icon">▧</span><div><strong>图片附件</strong><p>截图、参考图和清单都不再散落。</p></div></div>
          </div>
        </div>

        <div className="detail-card-demo" aria-label="任务详情卡片演示">
          <div className="detail-card-top"><span>任务详情</span><span>•••</span></div>
          <h3>准备夏季旅行计划</h3>
          <p className="detail-card-summary">确认行程、酒店和需要提前准备的物品。</p>
          <div className="detail-chip-row"><span className="chip orange">高优先级</span><span className="chip blue">生活</span><span className="chip neutral">7 月 26 日</span></div>
          <div className="detail-card-block"><span>备注</span><p>优先选择交通方便、可以免费取消的住宿。</p></div>
          <div className="detail-card-block"><span>链接</span><div className="link-preview"><i>↗</i><div><strong>旅行路线草稿</strong><small>maps.example.com</small></div></div></div>
          <div className="attachment-strip" aria-label="图片附件预览">
            <div className="attachment-thumb thumb-map"><span>MAP</span></div>
            <div className="attachment-thumb thumb-list"><span>LIST</span></div>
            <div className="attachment-count">＋2</div>
          </div>
        </div>
      </div>
    </section>
  )
}
