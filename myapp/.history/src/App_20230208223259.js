import "./App.css"

import Pages from "./components/Pages/Pages"
import { useState } from "react"
import React from 'react'

import { BrowserRouter as Router  ,Routes,  Route } from 'react-router-dom'
import Home from './components/home/Home'

import About from './components/about/About'
import Services from './components/home/Services/Services'
import Anounces from './components/Anounces/Anounces'
import Favoirss from './components/Anounces/Favoriss'
import Contact from './components/AjouterAnnonce/contact'
import SignInSignUp from './components/SignInSignUp/SignInSignUp'
import SignUp from './components/SignInSignUp/SignUp'
import User from './components/User/User'
import UserProfile from './components/userProfile/UserProfile';
import FirstYear from './components/FirstYear/FirstYear'
import Module from './components/Module/Module'
import AjouteAnnonce from './components/AjouterAnnonce/AjouterAnnonce'
import Layout from './components/Layout';
import Chat from './components/chat/chat';
import RequireAuth from "./components/RequireAuth"
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
        <Routes>
          <Route path="/" element={<Layout/>}>
          {/* public routes */}
          <Route exact path='/' element={<Home/>} /> 
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/Anounces' element={<Anounces />} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/SignUp' element={<SignUp/> } token={token}/>
          <Route exact path='/signin' element={<SignInSignUp />} userLogin={userLogin} render={(userLogin) => <SignInSignUp {...userLogin} authed={true}/>  } />
         
        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route exact path='/Mesfavoris' element={<Favoirss />} />
          <Route exact path='/User' element={<User/>}  />
          <Route exact path='/FirstYear' element={<FirstYear/>} />
          <Route exact path='/Module' element={<Module/>} />
          <Route exact path='/AjouterAnnonce' element={<AjouteAnnonce/>} />
          <Route exact path='/chat' element={<Chat/>} />
          <Route exact path='/:id/' element={<DetailleAnnonce/>} />
          <Route exact path='/scrappedannonces' element={<ScrappedAnounces />} />
          <Route exact path='/UserProfile' element={<UserProfile />} />
          </Route>
          {/*<Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
  */}
   </Route>
        </Routes>
      
     
     
      </Router>
    </>
  )

    
}

export default App