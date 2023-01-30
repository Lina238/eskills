import React from 'react'
import bgImg from '../../assets/img1.jpg';
import {Link} from 'react-router-dom'
import  { useState } from "react";
import {useEffect}from 'react';
export default function Form()  {
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')
  const [error,setError]=useState(false)

  const handleSubmit=(e)=>{
        e.preventDefault();
        if(username.length==0||password.length==0){
            setError(true)
        }
        if(username&&password)
        {
        console.log("Username: ",username,"\nPassword: ",password)
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
                this.props.userLogin(data.token);
              }
            )
            .catch( error => console.error(error))
          }
        }
        function handleCallbackResponse(response){
                    console.log(response.credential);
        }
        useEffect(()=>{
           /*global google */
           google.accounts.id.initialize({
            client_id:"737259953220-57r4s68pki7obc4qgtr6te3ufal6krek.apps.googleusercontent.com",
            callback:handleCallbackResponse
           });
            google.accounts.id.renderButton(
                document.getElementById("divid"),
                {size:"large"}
             );
        } ,[]);
  return (
    <section>
      
        <div className="register">
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
                    <h5>Or</h5>

                </form>

            <div className="col-2">
            <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
    {/* {/* <div id="divid">
                            {/* <button className='btn10'>  Sign in with google </button> </div> */}
            </div>  */}
  )
}

