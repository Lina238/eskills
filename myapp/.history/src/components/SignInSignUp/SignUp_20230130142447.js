import React from 'react'
import bgImg from '../../assets/img2.jpg';
import {Link} from 'react-router-dom'
import  { useState } from "react";

export default function Form() {
    const [username,setusername]=useState('')
    const [Email,setEmail]=useState('')
    const [password,setpassword]=useState('')
    const [password1,setpassword1]=useState('')
    const [error,setError]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username.length<=1||
          password.length<6||
          Email.length==0||
          password1.length==0||
          password!=password1){
            if(username.length<=1){
              window.alert(username+" too short")}
              if(data.password.length<6){
               window.alert("Password is too short")}
               if(Email.length==0){

               }
            setError(true)
        }
        if(username&&password&&password1&&Email)
        {
        console.log("Username: ",username,"\nPassword: ",password)
        const  state = {
          username: username, email:Email,password: password
       }
       fetch('http://127.0.0.1:8000/core/users/', {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(state)
       })
       .then( data => data.json())
       .then(
         data => {
           console.log(data.token);
           console.log(data);
           
           window.alert("user :"+data.username+"  created successfully");
         }
       )
       .catch( error => console.error(error))
            
          }
        }
  return (
    <section>
        <div className="register1">
            <div className="col-4">
                <h2>Sign Up</h2>
                <span>Register and enjoy the service</span>

                <form id='form2' className='flex flex-col' onSubmit={handleSubmit} >
                    <input type="text"  placeholder='username' onChange={e=>setusername(e.target.value)} />
                    {error&&username.length<=0?
               <label>Username can't be Empty</label>:""}  
                    <input type="email"  placeholder='Email' onChange={e=>setEmail(e.target.value)} /> 
                      {error&&Email.length<=0?
               <label>Email can't be Empty</label>:""} 
                    <input type="password"  placeholder='password' onChange={e=>setpassword(e.target.value)}/>
                    {error&&password.length<=0?
               <label>The password can't be Empty</label>:""} 
                    <input type="password"  placeholder='confirm password' onChange={e=>setpassword1(e.target.value)} />
                    {error&&password!=password1?
               <label>Please enter the same password</label>:""} 
                    <button className='btn2'>Sign Up</button>
                    <Link to ="/signin">
            
                        <h6>Do you have an acount?</h6> 
                    </Link>
                </form>

            </div>
            <div className="col-3">
            <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
