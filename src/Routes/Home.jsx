Routeimport React from 'react'
import Header from '../Components/Header/Header'
import About from '../Components/Home/About'
import Hero from '../Components/Home/Hero'
import Location from '../Components/Home/Location'
import Testimonials from '../Components/Home/Testimonials'


const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Testimonials />
      <About />
      <Location />
      </div>
  )
}

export default Home