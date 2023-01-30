
import user from '../img/user.png';
import edit from '../img/edit.png';
import jwtDecode from 'jwt-decode'
import settings from '../img/settings.png';

import logout from '../img/log-out.png';
import './profile.css';

import { useNavigate } from "react-router-dom";

import React, {useState, useEffect, useRef} from 'react';



function Profile() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  function logout(){
    localStorage.clear(localStorage.getItem('jwt'));
    navigate('/SignInSignUp')
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
          <h3>Yasmine Arezki<br/></h3>
          <ul>
            <DropdownItem id={1} img = {user} text = {"Mon compte"}/>
            <DropdownItem  id={2} img = {edit} text = {"Mes services"}/>
            <DropdownItem id={3} img = {settings} text = {"Mes favoris"}/>
            <DropdownItem  id={4} img = {logout} 
            // onClick={logout()} 
            text = {"Logout"}/>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem' id={props.id} >
     
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default Profile;
