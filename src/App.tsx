import React from 'react'

import Navbar from './components/Navbar'
import MyAvatar from './components/Myavatar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import './App.scss'

const App: React.FC = () => {
  return (
    <>
      {/* Navigation Bar */}
      <section>
        <Navbar />
      </section>
      {/* Avatar */}
      <section>
        <MyAvatar />
      </section>
      {/* About */}
      <section id="about">
        <About />
      </section>
      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>
      {/* Works */}
      <section id="works">
        <Works />
      </section>
      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default App
