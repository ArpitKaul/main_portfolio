// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Skills from './Sections/Skills'



const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
    </main>
  )
}

export default App
