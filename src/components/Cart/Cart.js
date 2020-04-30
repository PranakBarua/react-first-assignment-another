import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    //console.log(cart);
    const friend=props.friend;
    console.log(friend);
    let total=0;
    for(let i=0;i<cart.length;i++){
        total=total+cart[i].salary;
    }
    return (
        <div>
            <h3>Add friend : {cart.length}</h3>
            <h5><small>Total salary : {total}</small></h5>

            <h4>{friend.name} is your new friend</h4>
           
        </div>
    );
};

export default Cart;