import React from 'react'

import Navbar from './components/Navbar'
import MyAvatar from './components/Myavatar'
import About from './components/About'
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
    </>
  )
}

export default App
