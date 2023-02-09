import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaLocationArrow} from "react-icons/fa";
import {Link} from 'react-router-dom'
import React  from "react"
import {useEffect} from 'react';

import "../User/User.css"

function Anounces () {

    // 
  var [cards,setCards] = useState( [])
  var [searchterm,setSearchterm]=useState("")
    useEffect(()=> {
      fetch('http://127.0.0.1:8000/core/annonces1/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cards.credentials)
      })
      .then( data => data.json())
      .then(
        data => {
             console.log(typeof(data))
  
          if(!(data in cards)){
            setCards(data)
          }
          else{console.log("element exists")}
       
        })
      .then(
        console.log(cards),
      )
      .catch( error => console.error(error))
      }, [])
      const handlesearch=(e)=>{
        console.log(e.target.value)
        let value=e.target.value
        setSearchterm(value)
      }
      console.log(searchterm)
  return (
    <div>
      
      <section>
      <h1 className="heading"> Anounces</h1>
      <form className='flex'>
            <div className='box'>
              <input
              onChange={handlesearch}
              type='text'
               placeholder='Search' />
            </div>
            {/* <div className='box'>
              <input type='text' placeholder='Level' />
            </div>
            <div className='box'>
              <input type='text' placeholder='Year' />
            </div> */}
            
            <button className='btn5'> 
              <i className='fa fa-search'></i> Rechercher
            </button>
          </form>
        <div className="container">
        
          <div className="cards">
            { cards.map((card) =>(
              
  
                <div key={card.id} className="card">
                  
                  <h3 className="titles">{card.titre}</h3>
                  <div className="iconscarte"> 
                  <FaHeart className="heart"/> 
                  <Link to ="/chat"> <FaRegCommentDots/> </Link><FaLocationArrow/></div>
                  
                  <h6 className="prices">{card.prix}</h6>
                  
                  <Link to ={`/${card.id}/`}  >
                    
                  {card.image1!=null &&<img  className="images"src={card.image1} alt=""/>}
                {!card.img!=null &&<img className="images" src={card.img} alt=""/>}
                 
                    
                    </Link>
                  <p className="texts">{card.discription}</p>
                  <h6 className="profs">{card.nom}</h6>
                  
                  
                  
                </div>
              ))
            }

            
          </div>
        </div>
      </section>
     
    </div> 
    
  );
}

export default Anounces;
