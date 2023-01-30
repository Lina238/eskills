import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaLocationArrow} from "react-icons/fa";
import {Link} from 'react-router-dom'
import React  from "react"




function Anounces () {
  
  const state = {
    books: []
  }

  const loadannoces = () => {
    fetch('http://127.0.0.1:8000/api/books/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${this.props.token}`
      },
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        this.setState({books: data})
      }
    )
    .catch( error => console.error(error))
  }

  const [cards] = useState([
    {
      title: 'Maths',
      text: 'I made online courses on maths',
      price:'1500Da',
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUJeL8pn4WjJ4N00RZXA5LVp3pfDBIzSJDmwjdv_Ytg&s',
      prof:'By Arezki Yasmine'

      
   
    },


    {
      title: 'Physics',
      text: 'I made online courses on physics',
      price:'1900Da',
      src:'https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBoeXNpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      prof:'By Goumiri Sabria'
    },

    {
      title: 'Sciences',
      text: 'I made online courses on sciences',
      price:'1800Da',
      src:'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2NpZW5jZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      prof:'By Merabat Celia'
    },

    {
      title: 'Histoire',
      text: 'I made online courses on History',
      price:'2000Da',
      src:'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGlzdG9yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      prof:'By Saadoun Sara'

      
   
    },


    {
      title: 'islamique',
      text: 'I made online couses on islamique',
      price:'1500Da',
      src:'https://images.unsplash.com/photo-1585036156171-384164a8c675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      prof:'By Benhadj Karim'
    },

    {
      title: 'French',
      text: 'I made online couses on sciences',
      price:'1500Da',
      src:'https://images.unsplash.com/photo-1505902987837-9e40ec37e607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlbmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',      prof:'By Saidi Mohammed'
     
    },
    
          
  ])
  return (
    <div>
      
      <section>
      <h1 className="heading"> Anounces</h1>
        <div className="container">
        
          <div className="cards">
            {cards.map((card, i) =>(
                <div key={i} className="card">
                  
                  <h3 className="titles">{card.title}</h3>
                  <div className="iconscarte"> <FaHeart className="heart"/> <Link to ="/chat"> <FaRegCommentDots/> </Link><FaLocationArrow/></div>
                  
                  <h6 className="prices">{card.price}</h6>
                  
                  <Link to ="/DetailsAnounce"><img className="images" src={card.src}/></Link>
                  <p className="texts">{card.text}</p>
                  <h6 className="profs">{card.prof}</h6>
                  
                  
                  
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
