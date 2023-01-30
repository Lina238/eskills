import React from "react"

import Heading from "../../common/Heading"
import "./about.css"

const About = () => {
  return (
    <>
   
      <section className='about'>
        
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='About Us' />
            <p>The E-SKILLS Wsite is a kind of "Good corner" specialized in middle and high school level tutoring.</p>
            <p>You can indeed place ads for offers or requests for private lessons.This site wishes to offer a functional, secure and free tool to facilitate the connection between students who need help and teachers who offer courses in their city or neighborhood.</p>
            
          </div>
          <div className='right row'>
            <img src='./about.jpg' alt='' />
          </div>
        </div>
        
      </section>
    
    </>
  )
}

export default About