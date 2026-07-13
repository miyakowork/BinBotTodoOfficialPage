import AISection from './components/AISection'
import DataControlSection from './components/DataControlSection'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LocalFirstSection from './components/LocalFirstSection'
import Navigation from './components/Navigation'
import ProjectStatus from './components/ProjectStatus'
import Reveal from './components/Reveal'
import TaskDetailSection from './components/TaskDetailSection'
import WorkflowSection from './components/WorkflowSection'

export default function App() {
  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <Hero />
        <Reveal><WorkflowSection /></Reveal>
        <Reveal><TaskDetailSection /></Reveal>
        <Reveal><AISection /></Reveal>
        <Reveal><LocalFirstSection /></Reveal>
        <Reveal><DataControlSection /></Reveal>
        <Reveal><ProjectStatus /></Reveal>
        <Reveal><Faq /></Reveal>
      </main>
      <Footer />
    </div>
  )
}
