import "./App.css"
import Pages from "./components/Pages/Pages"
import { useState } from "react"
import React from 'react'

import { BrowserRouter as Router  ,Routes,  Route } from 'react-router-dom'
import Home from './components/home/Home'

import About from './components/about/About'
import Services from './components/home/Services/Services'
import Anounces from './components/Anounces/Anounces'
import contact from './components/Anounces/Anounces'
import SignInSignUp from './components/SignInSignUp/SignInSignUp'
import SignUp from './components/SignInSignUp/SignUp'
import User from './components/User/User'
import UserProfile from './components/userProfile/UserProfile';
import FirstYear from './components/FirstYear/FirstYear'
import Module from './components/Module/Module'
import AjouteAnnonce from './components/AjouterAnnonce/AjouterAnnonce'
import Chat from './components/chat/chat'
import DetailleAnnonce from './components/DetailleAnonce/DetailleAnnonce'
import ScrappedAnounces from'./components/Anounces/scrapedannonce'
function App() {
  const [token,setToken]=useState('');
  const userLogin=(tok)=>{
    setToken(tok);
    console.log(token);
   
  }
  return  (
    <> 
    
      <Router>     
        <Routes>
          <Route exact path='/' element={<Home/>} /> 
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/Anounces' element={<Anounces />} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/contact' component={<Contact/>} />
          
          <Route exact path='/signin' element={<SignInSignUp />} userLogin={userLogin} render={(userLogin) => <SignInSignUp {...userLogin} authed={true}/>  } />
          <Route exact path='/SignUp' element={<SignUp/> } token={token}/>
          <Route exact path='/User' element={<User/>}  />
          
          <Route exact path='/FirstYear' element={<FirstYear/>} />
          <Route exact path='/Module' element={<Module/>} />
          <Route exact path='/AjouterAnnonce' element={<AjouteAnnonce/>} />
          <Route exact path='/chat' element={<Chat/>} />
          <Route exact path='/DetailsAnounce' element={<DetailleAnnonce/>} />
          <Route exact path='/scrappedannonces' element={<ScrappedAnounces />} />
          <Route exact path='/UserProfile' element={<UserProfile />} />

          
          
 
          
          {/*<Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
  */}
        </Routes>
      
      </Router>
    </>
  )

    
}

export default App