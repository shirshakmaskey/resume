import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Education from './components/Education';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Research />
        <Education />
      </main>
      <footer className="text-center text-secondary" style={{ padding: '40px 0', borderTop: '1px solid var(--border)' }}>
        <p>© {new Date().getFullYear()} Shirshak Maskey. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
