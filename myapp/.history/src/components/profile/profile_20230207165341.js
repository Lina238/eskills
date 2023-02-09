
import user from '../img/user.png';
import edit from '../img/edit.png';
import jwtDecode from 'jwt-decode'
import settings from '../img/settings.png';
import {Link} from 'react-router-dom'
import logout from '../img/log-out.png';
import './profile.css';
import User from '../User/User'
import { useNavigate } from "react-router-dom";
import AjouteAnnonce from '../AjouterAnnonce/AjouterAnnonce'
import React, {useState, useEffect, useRef} from 'react';
import SignUp from '../SignInSignUp/SignUp'


function Profile() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function logoutt(){
    console.log("logout")
  }
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    
    <div className="profile">
   
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={user}></img>
          
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3><br/>{localStorage.getItem('jwt1')}</h3>
          <ul>
            <DropdownItem 
            page='/FirstYear'     
             img = {user} text = {"Mon compte"}/>
            <DropdownItem 
             page='/services' 
            // function={messervices()}
             img = {edit} text = {"Mes services"}/>
            {/* <link to='/User'>            
             */}   
          <DropdownItem         
        lin='/AjouterAnnonce'
             img = {settings} text = {"Mes favoris"}/>
            <DropdownItem 
             href='/signin'
            img = {logout} 
            text = {"Logout"}/>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

function DropdownItem(props){
  return(
    <li className ='dropdownItem'
      >
      <img src={props.img}></img>
      <a href={props.lin}> {props.text} </a>
    </li>
  );
}

export default Profile;
