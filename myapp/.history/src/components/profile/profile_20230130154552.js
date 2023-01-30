
import user from '../img/user.png';
import edit from '../img/edit.png';

import settings from '../img/settings.png';

import logout from '../img/log-out.png';
import './profile.css';



import React, {useState, useEffect, useRef} from 'react';



function Profile() {

  const [open, setOpen] = useState(false);
  function logout(){
    const l1=localStorage.getItem('username')
    const l=jwtDecode(localStorage.getItem('jwtgoogle'))
    localStorage.clear(l);
    localStorage.clear(l1);
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
          <h3>Yasmine Arezki<br/><span>Prof de maths</span></h3>
          <ul>
            <DropdownItem img = {user} text = {"Mon compte"}/>
            <DropdownItem img = {edit} text = {"Mes services"}/>
            <DropdownItem img = {settings} text = {"Mes favoris"}/>
            <DropdownItem img = {logout} text = {"Logout"}/>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default Profile;
