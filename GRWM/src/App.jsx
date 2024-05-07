import { useState } from 'react'
import NavBar from './components/Header/NavBar'
import Description from './components/Hero/Description'

function App() {
  return (
    <div className="bg-black h-screen">
      <NavBar />
      <Description />
    </div>
  )
}

export default App
