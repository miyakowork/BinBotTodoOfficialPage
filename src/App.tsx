import AISection from './components/AISection'
import DataControlSection from './components/DataControlSection'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LocalFirstSection from './components/LocalFirstSection'
import Navigation from './components/Navigation'
import ProjectStatus from './components/ProjectStatus'
import TaskDetailSection from './components/TaskDetailSection'
import WorkflowSection from './components/WorkflowSection'

export default function App() {
  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <Hero />
        <WorkflowSection />
        <TaskDetailSection />
        <AISection />
        <LocalFirstSection />
        <DataControlSection />
        <ProjectStatus />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
