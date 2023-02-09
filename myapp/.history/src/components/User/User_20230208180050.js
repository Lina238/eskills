import React, {userState, useEffect, useInsertionEffect} from 'react'
import "./User.css"
import {BsChat} from "react-icons/bs"
import {GrNotification} from "react-icons/gr"
import {Link} from 'react-router-dom'
import Profile from '../profile/profile'
import Form from '../SignInSignUp/SignInSignUp'
import jwt from 'jwt-decode';
import Cookies from 'universal-cookie';
import { useState } from 'react'
import jwtDecode from 'jwt-decode'

export default function Navbar() {
    return (
              
        <div className='nav'>
           <Profile/>  
           <nav>
              <div className='contain'>
              <div>
              <Link to ="/Anounces">
                    <button className='btns'><h5>Anounces</h5></button>
                    </Link>
              <Link to ="/AjouterAnnonce">
                    <button className='btns'><h5>Poster un service</h5></button>
                    </Link>
                    {localStorage.getItem('jwt1')=="eskills"||localStorage.getItem('jwt1')=="versatiles geeks"
&&
                    <Link to ="/scrappedannonces">
                    <button className='btns'><h5>scrapping</h5></button>
                    </Link>}
                    <h2 className='Name'>
                           {localStorage.getItem('jwt1')}
                     </h2>                     
                
             {}
                
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
                       <div className='items'>
                          <ul>
                            <li ><a href ="#"> First Year </a></li>
                            <li ><a href ="#"> Second Year </a></li>
                            <li ><a href ="#"> Third Year </a></li>
                            <li ><a href ="#"> Fourth Year </a></li>
                           </ul>
                        </div>
                    </li>
                    <li ><a href ="#"> Secondary  School </a>
                     <div className='items'>
                        <ul>
                          <li ><a href ="#"> First Year </a></li>
                          <li ><a href ="#"> Second Year </a></li>
                          <li ><a href ="#"> Third Year </a></li>   
                       </ul>
                     </div>
                    </li>
              </ul>


              <div className="bg1">
            <p className="paragraphe">We Envision World's<br/> Best Learning <br/> Experience</p>
            
          
        </div>

            </div>
        </div>
     
    )
}
