
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

  function logout(id){
    // localStorage.clear(localStorage.getItem('jwt'))
    // navigate('/SignInSignUp')
    console.log("logout"+id)
  }
  function moncompte(id){
    console.log("moncompte"+id)
    // navigate('/Anounces')
  }
  function mesfavoris(id){
    console.log("mesfavoris"+id)
    // navigate('/chat')
  }
  function messervices(id){
    console.log("messervices"+id)
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
            function={moncompte()} 
             id={"1"}
             img = {user} text = {"Mon compte"}/>
            <DropdownItem  
            function={messervices()}
            id={"2"}
             img = {edit} text = {"Mes services"}/>
            <DropdownItem 
            function={mesfavoris()}
            id={"3"}
             img = {settings} text = {"Mes favoris"}/>
            <DropdownItem 
            function={logout()}  
            id={"4"}
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
     onClick={props.function}
     id={props.id}
      >
     {/* <button onClick={props.function}></button> */}
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default Profile;
