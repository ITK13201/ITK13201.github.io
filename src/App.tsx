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
      <Navbar />
      {/* Avatar */}
      <MyAvatar />
      {/* About */}
      <About />
      {/* Skills */}
      <Skills />
      {/* Works */}
      <Works />
      {/* Contact */}
      <Contact />
    </>
  )
}

export default App
