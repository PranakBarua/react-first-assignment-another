import React, { useState } from 'react';
import './FriendList.css';
import fakeData from '../../fakeData/person'
import Friend from '../Friend/Friend';
import Cart from '../Cart/Cart';
const FriendList = () => {
    
    const [friends,setFriend]=useState(fakeData);
    const [cart,setCart]=useState([]);
    const [newFriend,setNewFriend]=useState({});
    const handleAddFriend=(friend)=>{
        const newCart=[...cart,friend];
        setCart(newCart);
        setNewFriend(friend);
    }
    return (
        <div className="friendList-container">
            <div className="friend-container">
                <ul>
                    {
                        friends.map(friend=><Friend 
                            friend={friend} 
                            handleAddFriend={handleAddFriend}>
                                
                            </Friend>)
                        //<Friend friends={friends}></Friend>
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart} friend={newFriend}></Cart>
            </div>
        </div>
    );
};

export default FriendList;