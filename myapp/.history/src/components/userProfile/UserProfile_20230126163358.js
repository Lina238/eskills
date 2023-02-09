import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg" />
         </div> 
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
           
          </div>
        </div>
      </div>
    );
  }
}
