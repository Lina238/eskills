import "./App.css"
import Pages from "./components/Pages/Pages"
import { useState } from "react"

function App() {
  const [token,setToken]=useState('');
  const userLogin=(tok)=>{
    setToken(tok);
    console.log(token);
  }
  return <Pages userLogin={userLogin} />

    
}

export default App