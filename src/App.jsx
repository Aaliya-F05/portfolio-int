import React from 'react'
import Header from './components/Header'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app-wrapper">
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      <div className="bg-glow-3"></div>
      
      <div className="layout-grid">
        <div className="left-column">
          <Header />
        </div>
        
        <div className="right-column">
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
