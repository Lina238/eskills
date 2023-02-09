import React, {userState, useEffect, useInsertionEffect} from 'react'
import './detaille.css';
import DetailsThumb from './DetailsThumb';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
const DetailleAnnonce=()=>{
  
  const [student, setSetudent] = useState([])

const {id} = useParams();
const history = useHistory();

useEffect(() => {
    getSingleStudent();
},[])


const getSingleStudent = async () => {
  const  { data } = await axios.get(`http://127.0.0.1:8000/core/annonces/${id}/`)
  console.log(data);
  setSetudent(data);
  

}

const deleteUser = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
    history.push("/")
}
  state = {
    products: [
      {
        "_id": "1",
        "Module": "Maths ",
        "src": [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUJeL8pn4WjJ4N00RZXA5LVp3pfDBIzSJDmwjdv_Ytg&s",
            
          ],
        
        "description": "I made online courses on maths thyh (yhyu ghds dgsgds dfgdr fddhrf fhd s esteyr estdrs ryezery .",
        "price": 1500,
        "nom":"Goumiri",
        "prenom":' Sabria',
        "phone":'0552903961',
        "email":'sabriabrea@gmail.com',
        "wilaya":'Bejaia',
        "address":'Amizor',
        "level":'primary',
        "type":'online',
         
        
      
     
     
     
     
        
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const titre=localStorage.getItem('titre')
    console.log(localStorage.getItem('titre'))
    const {products, index} = this.state;
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
  };
}

export default DetailleAnnonce;