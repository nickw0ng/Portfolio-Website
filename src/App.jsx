import "./App.css";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
// import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground'

function App() {
  return (
    <div className="app-container">
      <ParticlesBackground />
      <Navigation />
      <Hero />
      <main className="main-content">
        <About />
        <Experience />
        {/* <Projects /> */}
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 
