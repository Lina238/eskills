import "./App.css"
import Pages from "./components/Pages/Pages"
import React  from "react"
import { useEffect } from "react"
import checkautologin from "./components/SignInSignUp/SignInSignUp"
import {useDispatch} from 'react-redux';
function App() {
  useEffect(()=>{
    const usedispatch=useDispatch();
       checkautologin(usedispatch);
  },[])
  return <Pages />

    
}

export default App