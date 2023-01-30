import React from 'react'

import { BrowserRouter as Router  ,Switch,  Route } from 'react-router-dom'
import Home from '../home/Home'

import About from '../about/About'
import Services from '../home/Services/Services'
import Anounces from '../Anounces/Anounces'

import SignInSignUp from '../SignInSignUp/SignInSignUp'
import SignUp from '../SignInSignUp/SignUp'
import User from '../User/User'

import FirstYear from '../FirstYear/FirstYear'
import Module from '../Module/Module'
import AjouteAnnonce from '../AjouterAnnonce/AjouterAnnonce'
import Chat from '../chat/chat'
import DetailleAnnonce from '../DetailleAnonce/DetailleAnnonce'









const Pages = () => {
  return (
    <>
     
     
      
    
    
      <Router>
        
        
        
        
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/about' component={About} />
          <Route exact path='/Anounces' component={Anounces} />
          <Route exact path='/services' component={Services} />
          {/*<Route exact path='/contact' component={Contact} /> */}
          <Route exact path='/signin' component={SignInSignUp} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/User' component={User} />
          
          <Route exact path='/FirstYear' component={FirstYear} />
          <Route exact path='/Module' component={Module} />
          <Route exact path='/AjouterAnnonce' component={AjouteAnnonce} />
          <Route exact path='/chat' component={Chat} />
          <Route exact path='/DetailsAnounce' component={DetailleAnnonce} />


          
          
 
          
          {/*<Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
  */}
        </Switch>
      
      </Router>
    </>
  )

}
export default Pages