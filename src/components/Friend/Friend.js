import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUserFriends } from '@fortawesome/free-solid-svg-icons'
import './Friend.css'
const Friend = (props) => {
    const{url,name,email,position,address,salary}=props.friend;
    return (
        <div className="container">
            <div className="card">
                <img src={url} alt=""/>
                <div className="card-body">
                    <h5 class="card-title">Name : {name}</h5>
                    <p class="card-text">Position : {position}</p>
                    <p>Club : {address}</p>
                    <p>Email : {email}</p>
                    <p>Salary : ${salary}</p>
                    <button className="add-button" 
                    onClick={()=>props.handleAddFriend(props.friend)}>
                        <FontAwesomeIcon icon={faUserFriends} /> Add Friend
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Friend;