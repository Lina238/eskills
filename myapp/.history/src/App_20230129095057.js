import "./App.css"
import Pages from "./components/Pages/Pages"
import React  from "react"

function App() {
  const userLogin=(token)=>{
    console.log(token)
  }
  return <Pages />

    
}

export default App