import "./App.css"
import Pages from "./components/Pages/Pages"
import React  from "react"
import { useEffect } from "react"
import Form from "./components/SignInSignUp/SignInSignUp"
import {useDispatch} from 'react-redux';
function App() {
  useEffect(()=>{
    constusedispatch=useDispatch();
checkautologin();
  },[])
  return <Pages />

    
}

export default App