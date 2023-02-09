import React from 'react'
import jwtDecode from 'jwt-decode'
import bgImg from '../../assets/img1.jpg';
import {Link} from 'react-router-dom'
import  { useState } from "react";
import {useEffect}from 'react';
import useAuth from '../../hooks/useAuth';
import {  useLocation } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
export default function Form()  {
  const navigate = useNavigate();
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')
  const [error,setError]=useState(false)
  const { setAuth } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit=(e)=>{
      
        e.preventDefault();
        if(username.length==0||password.length==0){
            setError(true)
        }
        if(username&&password)
        {
           const  state = {
            credentials: { username: username, password: password
            }
        }
            fetch('http://127.0.0.1:8000/auth/', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(state.credentials)
            })
            .then( data => data.json())
            .then(
              data => {         
               if(data.token!=null){ 
                localStorage.clear(localStorage.getItem('jwt'));
                localStorage.setItem('jwt1',state.credentials.username)
                window.alert("user :"+state.credentials.username)
                navigate(from, { replace: true });
              
              }
                else{
                  window.alert("please verify that your account does exist :(")
                }
              }  
            )
            .catch( error => 
             console.log(error)
          )
          }
        }
         handleCallbackResponse = (response) =>{                    
                     if(response.credential!=null){
                      localStorage.clear(localStorage.getItem('jwt'));
                      const ll=response.credential
                      const l= jwtDecode(response.credential)
                       console.log(l)
                      localStorage.setItem('jwt1',l.name);
                       setAuth({l})
                       navigate('/User')
                     }
        }
        useEffect(()=>{
           /*global google */
           google.accounts.id.initialize({
            client_id:"737259953220-57r4s68pki7obc4qgtr6te3ufal6krek.apps.googleusercontent.com",
            callback:this.state.handleCallbackResponse
           });
            google.accounts.id.renderButton(
                document.getElementById("divid"),
                {size:"large"}
             );
        } ,[]);

  return (
    <section>
        <div className="register" id="reg">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form1' className='flex flex-col' onSubmit={handleSubmit}>

                    <input type="text"  placeholder='username' onChange={e=>setusername(e.target.value)}/>
                {error&&username.length<=0?
               <label>Username can't be Empty</label>:""}    
                    <input type="password"  placeholder='password' onChange={e=>setpassword(e.target.value)}/>
 
                {error&&password.length<=0?
               <label>The password can't be Empty</label>:""}  
                    <button className='btn2'>Sign In</button>
                    <Link to ="/SignUp">
            
                        <h6>Don't have an acount?</h6> 
                    </Link>
                    <div id="divid"></div>   
                </form>
               
           
            </div>
            
            <div className="col-2">
            <img src={bgImg} alt="" />
            </div>
        </div>
    </section>

  )
}
export function formatError(errorResponse) {
  switch (errorResponse.error.message) {
      case 'EMAIL_EXISTS':
          return 'Email already exists';

      case 'EMAIL_NOT_FOUND':
          return 'Email not found';
      case 'INVALID_PASSWORD':
          return 'Invalid Password';
      case 'USER_DISABLED':
          return 'User Disabled';

      default:
          return '';
  }
}