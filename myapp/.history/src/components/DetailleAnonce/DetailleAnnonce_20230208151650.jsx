import React, {userState, useEffect, useInsertionEffect} from 'react'
import './detaille.css';
import DetailsThumb from './DetailsThumb';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
const DetailleAnnonce=()=>{
  
  const [Annonce, setAnnonce] = useState([])

const {id} = useParams();
const history = useHistory();

useEffect(() => {
    Annonceget();
},[])


const Annonceget = async () => {
  const  { data } = await axios.get(`http://127.0.0.1:8000/core/annonces/${id}/`)
  console.log(data);
  setAnnonce(data);

}

// const deleteUser = async (id) => {
//     await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
//     history.push("/")
// }


 
    return(
      <div className="detail">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h1>{titre}</h1>
                  <span>{item.price}</span>
                </div>
                <p>{item.description}</p>
                <p><a>Name :  </a>{item.nom} {item.prenom}</p>
                <p><a> E-mail :  </a>{item.email}</p>
                <p><a> Phone :  </a>{item.phone}</p>
                <p><a> Level :  </a>{item.level}</p>
                <p><a> Type :  </a>{item.type}</p>
                <p><a> Address :  </a>{item.address}</p>
                <p><a> Wilaya :  </a>{item.wilaya}</p>
                

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="bt"> Contact </button>  <button className="bt"> Location </button>

              </div>
            </div>
          ))
        }
      </div>
    );
 
}

export default DetailleAnnonce;