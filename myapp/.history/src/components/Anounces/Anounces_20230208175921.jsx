import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaLocationArrow} from "react-icons/fa";
import {Link} from 'react-router-dom'
import React  from "react"
import {useEffect} from 'react';

import "./App.css"

function Anounces () {

    // 
  var [cards,setCards] = useState( [])
 
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
  return (
    <div>
      
      <section>
      <h1 className="heading"> Anounces</h1>
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
