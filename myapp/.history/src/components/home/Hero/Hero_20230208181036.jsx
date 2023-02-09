import React from "react"
import Heading from "../../../common/Heading"

import "./hero.css"
const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title="We Envision World's"/>
          <Heading title="Best Learning "/>
          <Heading title ="Experience"/>
          <Heading subtitle='E-skills courses for everyone from different age groups and with various level of skills' />

          {/* <form className='flex'>
            <div className='box'>
              <input type='text' placeholder='Search' />
            </div>
            {/* <div className='box'>
              <input type='text' placeholder='Level' />
            </div>
            <div className='box'>
              <input type='text' placeholder='Year' />
            </div> 
            
            <button className='btn1'> 
              <i className='fa fa-search'></i> Rechercher
            </button>
          </form> */}
        </div>
      </section>
      
      
    </> 
  )
}

export default Hero
