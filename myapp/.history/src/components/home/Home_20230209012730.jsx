import React from "react"
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Anounces from "../Anounces/Anounces"
import About from "../about/About"
import Header from "../../common/header/Header"
import Footer from "../../common/footer/Fouter"

const Home = () => {
  localStorage.clear(localStorage.getItem('jwt'));
  localStorage.clear(localStorage.getItem('pic'));
  return (
       
    <>
    <Header/>
        <Hero />
        <Services/>
        <Anounces/>
        <About/>
        <Footer/>
       
      
    </>
  )
}

export default Home
