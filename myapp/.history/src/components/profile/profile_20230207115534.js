
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



function Profile() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function logout(){
    // localStorage.clear(localStorage.getItem('jwt'))
    // navigate('/SignInSignUp')
    console.log("logout")
  }
  function moncompte(){
    console.log("moncompte")
    // navigate('/Anounces')
  }
  function mesfavoris(){
    console.log("mesfavoris")
    // navigate('/chat')
  }
  function messervices(){
    console.log("messervices")
    // navigate('/services')
  }
  //   var li=document.getElementById("4");
  // li.onclick = function() { logout() };
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
            // function={moncompte()} 
             img = {user} text = {"Mon compte"}/>
            <DropdownItem 
             page='/services' 
            // function={messervices()}
             img = {edit} text = {"Mes services"}/> 
          <DropdownItem         
        lin='/AjouterAnnonce'  
             img = {settings} text = {"Mes favoris"}/>
            <DropdownItem 
           lin=logout()
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
    //  onClick='{props.function}'
      >
        {/* <a href={props.page}></a> */}
     {/* <button onClick={props.function}></button> */}
      <img src={props.img}></img>
      <a href={props.lin}> {props.text} </a>
    </li>
  );
}

export default Profile;
