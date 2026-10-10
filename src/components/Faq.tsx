import { faqItems } from '../content/site'
import SectionIntro from './SectionIntro'

export default function Faq() {
  return (
    <section className="faq-section page-section" id="faq">
      <div className="section-shell faq-layout">
        <SectionIntro
          eyebrow="FAQ"
          title="关于 BinBot Todo，先说清楚。"
          description="了解新版如何启动、访问和退出，以及本地数据、AI 与当前下载版本。"
        />
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-plus" aria-hidden="true">＋</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
