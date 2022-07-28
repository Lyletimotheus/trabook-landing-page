import React from 'react'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Things from '../components/Things'
import Deals from '../components/Deals'
import Plans from '../components/Plans'
import Testimonials from '../components/Testimonials'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Things />
      <Deals />
      <Plans /> 
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home