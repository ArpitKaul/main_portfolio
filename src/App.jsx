// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Sections/Navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Project from './Sections/Project'
import Achievment from './Sections/Achievment'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'



const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Achievment/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
