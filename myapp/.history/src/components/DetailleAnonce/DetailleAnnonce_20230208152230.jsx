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
      
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={Annonce.image1} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h1>{Annonce.titre}</h1>
                  <span>{Annonce.prix}</span>
                </div>
                "id": 19,
        "titre": "cours d'espagnol facile",
        "niveau": "bac",
        "discription": "je vous donne un cours de 29 séance",
        "image1": "http://127.0.0.1:8000/media/images/cours%20d'espagnol%20facile/lina_LBuAKL0.jpg",
        "mode": "Online",
        "nom": "lina benyahia",
        "prix": "5000",
        "lieu": "Annaba",
        "img": "null"
                <p>{item.description}</p>
                <p><a>Name :  </a>{Annonce.nom}</p>
                {/* <p><a> E-mail :  </a>{Annonce.email}</p> */}
                {/* <p><a> Phone :  </a>{item.phone}</p> */}
                <p><a> Level :  </a>{item.niveau}</p>
                <p><a> Type :  </a>{item.type}</p>
                <p><a> Mode :  </a>{Annonce.mode}</p>
                <p><a> Wilaya :  </a>{Annonce.lieu}</p>
                

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="bt"> Contact </button>  <button className="bt"> Location </button>

              </div>
            </div>
          
      </div>
    );
 
}

export default DetailleAnnonce;