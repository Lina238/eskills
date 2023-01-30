import "./App.css"
import Pages from "./components/Pages/Pages"
import { useState } from "react"

function App() {
  const [token,setToken]=useState('');
  const userLogin=(tok)=>{
    setToken(tok);
    console.log(token);
    userLogin={userLogin}
  }
  return return (
    <> 
    
      <Router>     
        <Routes>
          <Route exact path='/' element={<Home/>} /> 
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/Anounces' element={<Anounces />} />
          <Route exact path='/services' element={<Services/>} />
          {/*<Route exact path='/contact' component={Contact} /> */}
          <Route exact path='/signin' element={<SignInSignUp />} />
          <Route exact path='/SignUp' element={<SignUp/>} />
          <Route exact path='/User' element={<User/>}  />
          
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