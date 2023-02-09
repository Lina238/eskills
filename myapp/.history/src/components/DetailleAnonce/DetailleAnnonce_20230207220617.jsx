import React, {userState, useEffect, useInsertionEffect} from 'react'
import './detaille.css';
import DetailsThumb from './DetailsThumb';



class DetailleAnnonce extends React.Component{
  localStorage.getItem('card')
  state = {
    products: [
    ],
    index: 0
  };
  state=localStorage.getItem('card')
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
                  <h1>{item.Module}</h1>
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