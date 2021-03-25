import React from 'react'

import Navbar from './components/Navbar'
import MyAvatar from './components/Myavatar'
import './App.scss'

const App: React.FC = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      {/* Avatar */}
      <MyAvatar />
    </>
  )
}

export default App
