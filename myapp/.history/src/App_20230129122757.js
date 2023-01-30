import "./App.css"
import Pages from "./components/Pages/Pages"
import React  from "react"
import { useEffect } from "react"
function App() {
  useEffect(()=>{

checkautologin();
  },[])
  return <Pages />

    
}

export default App