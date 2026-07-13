interface SectionIntroProps {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionIntroProps) {
  return (
    <header className={`section-intro is-${align}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </header>
  )
}
