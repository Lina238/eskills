import React, {userState, useEffect, useInsertionEffect} from 'react'
import "../FirstYear/FirstYear.css"
import {BsChat} from "react-icons/bs"
import {GrNotification} from "react-icons/gr"
import {FaFacebook,FaInstagram} from "react-icons/fa"
import {Link} from 'react-router-dom'
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaLocationArrow} from "react-icons/fa";


export default function Navbar() {
    const [cards] = useState([
        {
          title: 'Maths',
          text: 'I made online courses on maths',
          price:'1500Da',
          src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUJeL8pn4WjJ4N00RZXA5LVp3pfDBIzSJDmwjdv_Ytg&s',
          prof:'By Arezki Yasmine'
    
          
       
        },
    
    
        {
          title: 'Maths',
          text: 'I made online courses on physics',
          price:'1900Da',
          src:'https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBoeXNpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
          prof:'By Goumiri Sabria'
        },
    
        {
          title: 'Maths',
          text: 'I made online courses on sciences',
          price:'1800Da',
          src:'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2NpZW5jZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
          prof:'By Merabat Celia'
        },
    
        {
          title: 'Maths',
          text: 'I made online courses on History',
          price:'2000Da',
          src:'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGlzdG9yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
          prof:'By Saadoun Sara'
    
          
       
        },
    
    
        {
          title: 'Maths',
          text: 'I made online couses on islamique',
          price:'1500Da',
          src:'https://images.unsplash.com/photo-1585036156171-384164a8c675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
          prof:'By Benhadj Karim'
        },
    
        {
          title: 'Maths',
          text: 'I made online couses on sciences',
          price:'1500Da',
          src:'https://images.unsplash.com/photo-1505902987837-9e40ec37e607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlbmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',      prof:'By Saidi Mohammed'
         
        },
        
              
      ])

     
    return (
        <div className='nav'>
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

         
            <div>
      
      <section>
      <h1 className="heading"> Anounces</h1>
        <div className="container">
          
          <div className="cards">
            {cards.map((card, i) =>(
                <div key={i} className="card">
                  
                  <h3 className="titles">{card.title}</h3>
                  <div className="iconscarte"> <FaRegHeart/> <FaRegCommentDots/> <FaLocationArrow/></div>
                  
                  <h6 className="prices">{card.price}</h6>
                  
                  <img className="images" src={card.src}/>
                  <p className="texts">{card.text}</p>
                  <h6 className="profs">{card.prof}</h6>
                  
                  
                  
                </div>
              ))
            }

            
          </div>
        </div>
      </section>
      
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
