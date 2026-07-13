import { faqItems } from '../content/site'
import SectionIntro from './SectionIntro'

export default function Faq() {
  return (
    <section className="faq-section page-section" id="faq">
      <div className="section-shell faq-layout">
        <SectionIntro
          eyebrow="FAQ"
          title="关于 BinBot Todo，先说清楚。"
          description="它仍在成长，但关于平台、数据和 AI，你现在就可以知道答案。"
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
