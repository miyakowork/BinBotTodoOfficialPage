import Hero from './components/Hero'
import Navigation from './components/Navigation'

export default function App() {
  return (
    <div className="site-shell">
      <Navigation />
      <main>
        <Hero />
      </main>
    </div>
  )
}
