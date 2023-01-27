import React from "react"

import "./footer.css"
import {FaFacebook,FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../../images/logo.jpg' alt='' />
              {/*<h2>The largest website for academic ads in Algeria</h2>
              <p>We wish all students to benefit from our site and to be a good helper in your path towards success and excellence</p>*/}
            </div>  
          </div>
          
          
         
        
          <div >
            <h3> Follow us </h3>
            <div className="social-media">
               
                <li><FaFacebook className="icons"></FaFacebook></li>
                <li><FaInstagram className="icons"></FaInstagram></li>
                
            </div>
          </div>
          <div className="box last">
            <h3>Your'e Question?</h3>
            <ul>
              <li><i className="fa fa-phone"> </i> 0552903961</li>
              <li><i className="fa fa-envelope"></i> E_SKILLS@gmail.com</li>
            </ul>

          </div>
          
        </div>
         
      
      </footer>
      
    </>
  )
}

export default Footer
