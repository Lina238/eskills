import React from 'react'
import bgImg from '../../assets/img1.jpg';
import {Link} from 'react-router-dom'
import  { useState } from "react";
import {useEffect}from 'react';
import jwt_decode from 'jwt-decode';
import Navbar from '../User/User';
import { useNavigate } from "react-router-dom";
import { Alert } from '@material-ui/lab';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function Form()  {
  // const navigate = useNavigate();
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')
  const [error,setError]=useState(false)
 
  const handleSubmit=(e)=>{
    // const navigation = useNavigation();
    // this.props.userLogin("sf");
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
               console.log('er')
            
              
    
               if(data.token!=null){ 
               const l=data.token
               Navigate('/User')
              //  this.props.navigation.navigate('/User',{l});
              }
                else{
                Alert("please verify that your account does exist :(")
                }
              }  
            )
            .catch( error => 
             Alert(error)
          )
          }
        }
        function handleCallbackResponse(response){
              
                    var userobj=jwt_decode(response.credential);
                    // this.props.userLogin(response.credential)
                     
                     if(response.credential!=null){
                      Navigate('/User')
                       const lr=response.credential
                      //  this.props.navigation.navigate('/User',{lr});
                     }
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
// export function checkautologin(){
//  const tokenDetailsString=localStorage.getItem('userDetails');
//  let tokenDetails='';
// //  if(!tokenDetailsString){
// //   // dispatch(logout())
// //  }
//  if(tokenDetailsString){
//   tokenDetails=JSON.parse(tokenDetailsString);
//  }
// }
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