import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Technologies from '../components/Technologies'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <div className='container mx-auto px-8'>
      <Navbar />
      <Hero />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default HomePage
