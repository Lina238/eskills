
import user from '../img/user.png';
import edit from '../img/edit.png';
import jwtDecode from 'jwt-decode'
import settings from '../img/settings.png';
import {Link} from 'react-router-dom'
import logout from '../img/log-out.png';
import './profile.css';
import React, {useState, useEffect, useRef} from 'react';
import SignInSignUp from '../SignInSignUp/SignInSignUp'
import UserProfile from '../userProfile/UserProfile';

function Profile() {
  const [open, setOpen] = useState(false);


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
          <img src={localStorage.getItem('pic')}></img>
          
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3><br/>{localStorage.getItem('jwt1')}</h3>
          <ul>
            {/* <DropdownItem 
             lin="/UserProfile"    
             img = {user} text = {"Mon compte"}/> */}
            <DropdownItem 
             page='/services' 
            // function={messervices()}
             img = {edit} text = {"Mes services"}/>
            {/* <link to='/User'>            
             */}   
          <DropdownItem         
        lin='/Mesfavoris'
             img = {settings} text = {"Mes favoris"}
             
             />
             
            <DropdownItem 
             lin='/signin'
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
