
import React ,{useState}from 'react'
import "../../App.css"
import "../header/header.css"
import {Link} from 'react-router-dom'
import {nav} from '../../components/Data/data'

const Header = (props) => {
  const [navList, setNavList] = useState(false)

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo' >
            
          <img src='../../images/logo.jpg' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
           <Link to ="/signin" onClick={props.login}>
            <button className='btn1'>
              <i className='fas fa-sign-in'></i> Sign In </button>
           </Link>
           
            {/*<button className='btn1'>
              <i className='fas fa-sign-in'></i> Sign Up
              </button>*/}
            
          </div>
          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}</button>
          </div>
          

          
        </div>
      </header>
    </>
  )
}

export default Header

