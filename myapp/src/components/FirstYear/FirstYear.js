import React, {userState, useEffect, useInsertionEffect} from 'react'
import "./FirstYear.css"
import {BsChat} from "react-icons/bs"
import {GrNotification} from "react-icons/gr"
import {FaFacebook,FaInstagram} from "react-icons/fa"
import {Link} from 'react-router-dom'
import Profile from '../profile/profile'


export default function Navbar() {


     
    return (
        <div className='nav'>
            <Profile/>
           <nav >
              <div className='contain'>
              <div>
              <Link to ="/AjouterAnnonce">
                    <button className='btns'><h5>Poster un service</h5></button>
                    </Link>
                    <h2 className='Name'>Arezki Yasmine </h2>
                </div>
               
                       

                
                </div>
            </nav>
            <div className='menu-bar'>
                
             <ul >
               
                    <li ><a href ="#"> Primary  school</a>
                       <div className='items'>
                         <ul>
                          <li ><a href ="FirstYear"> First Year </a></li>
                          <li ><a href ="#"> Second Year </a></li>
                          <li ><a href ="#"> Third Year </a></li>
                          <li ><a href ="#"> Fourth Year </a></li>
                          <li ><a href ="#"> Fifth Year </a></li>
                         </ul>
                        </div>
                    </li>
                    <li ><a href ="#"> Middle  school</a>
                       <div class='items'>
                          <ul>
                            <li ><a href ="#"> First Year </a></li>
                            <li ><a href ="#"> Second Year </a></li>
                            <li ><a href ="#"> Third Year </a></li>
                            <li ><a href ="#"> Fourth Year </a></li>
                           </ul>
                        </div>
                    </li>
                    <li ><a href ="#"> Secondary  School </a>
                     <div class='items'>
                        <ul>
                          <li ><a href ="#"> First Year </a></li>
                          <li ><a href ="#"> Second Year </a></li>
                          <li ><a href ="#"> Third Year </a></li>   
                       </ul>
                     </div>
                    </li>
              </ul>
              <div className="bg">
               <h2 className='Primary'>Primary School<br/>First Year</h2>
        </div>

            </div>

            <div className='Button-group'>
                 <Link to ="/Module">
                        <button>Maths</button>
                 </Link>
                   <button>Arabic</button>
                   <button>French</button>
                   <button>History</button>
                   <button>Science</button>
                   


            </div>

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
        </div>
     
    )
}
