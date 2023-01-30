import React, {userState, useEffect, useInsertionEffect} from 'react'
import "./User.css"
import {BsChat} from "react-icons/bs"
import {GrNotification} from "react-icons/gr"
import {Link} from 'react-router-dom'
import Profile from '../profile/profile'
import Form from '../SignInSignUp/SignInSignUp'
import jwt from 'jwt-decode';
import Cookies fom 'universal-Cookies';


export default function Navbar(username,tok) {
  const decoded=jwt(data.token);
                setUser(decoded);
                Cookies.set("jwt_authorization",data.token,{
                  expires:new Date(decoded.exp * 1000),
                });   
                if(user){
                  navigate('/user');
                }  
  // const [token,setToken]=useState('');
  // const userLogin=(tok)=>{
  //   setToken(tok);
  //   console.log(tok)
  // }
  if(username!=null){
   username=JSON.stringify(username)
  console.log(username);}
  else{
    return 0;
  }
  // var userob=jwt_decode(tok);
  // console.log(userob);

    return (
    
    
        
        <div className='nav'>
           <Profile/>  
           <nav>
              <div className='contain'>
              <div>
              <Link to ="/AjouterAnnonce">
                    <button className='btns'><h5>Poster un service</h5></button>
                    </Link>
                    <h2 className='Name'>{username}</h2>
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
            
          <form className='flex'>
            <div className='box'>
              <input type='text' placeholder='Courses' />
            </div>
            <div className='box'>
              <input type='text' placeholder='Level' />
            </div>
            <div className='box'>
              <input type='text' placeholder='Year' />
            </div>
            
            <button className='btn5'> 
              <i className='fa fa-search'></i> Rechercher
            </button>
          </form>
        </div>

            </div>
        </div>
     
    )
}
