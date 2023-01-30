import "./App.css"
import Pages from "./components/Pages/Pages"
import React  from "react"
import { useEffect } from "react"
import checkautologin from "./components/SignInSignUp/SignInSignUp"
import {useDispatch} from 'react-redux';
import { BrowserRouter as Router  ,Routes,  Route } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import Services from 'home/Services/Services'
import Anounces from 'Anounces/Anounces'

import SignInSignUp from 'SignInSignUp/SignInSignUp'
import SignUp from '../SignInSignUp/SignUp'
import User from '../User/User'
import FirstYear from '../FirstYear/FirstYear'
import Module from '../Module/Module'
import AjouteAnnonce from '../AjouterAnnonce/AjouterAnnonce'
import Chat from '../chat/chat'
import DetailleAnnonce from '../DetailleAnonce/DetailleAnnonce'
function App() {
  useEffect(()=>{
    // const usedispatch=useDispatch();
       checkautologin();
  },[])
  return (
    <>
     
     
      
    
    
      <Router>
        
        
        
        
        <Routes>
          <Route exact path='/' element={<Home/>} /> 
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/Anounces' element={<Anounces/>} />
          <Route exact path='/services' element={<Services/>} />
          {/*<Route exact path='/contact' component={Contact} /> */}
          <Route exact path='/signin' element={<SignInSignUp/>} />
          <Route exact path='/SignUp' element={<SignUp/>} />
          <Route exact path='/User' element={<User/>} />
          
          <Route exact path='/FirstYear' element={<FirstYear/>} />
          <Route exact path='/Module' element={<Module/>} />
          <Route exact path='/AjouterAnnonce' element={<AjouteAnnonce/>} />
          <Route exact path='/chat' element={<Chat/>} />
          <Route exact path='/DetailsAnounce' element={<DetailleAnnonce/>} />


          
          
 
          
          {/*<Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
  */}
        </Routes>
      
      </Router>
    </>
  )

    
}

export default App