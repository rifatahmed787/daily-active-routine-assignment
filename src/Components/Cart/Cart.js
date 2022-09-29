import React from 'react';

const Cart = ({ cart }) => {
    // console.log(cart)

    let total = 0;


    for (const player of cart) {
        total = total + parseFloat(player.time)
        // console.log(total)
    }


    return (
        <div>
            <h2 className='mt-10 font-bold text-xl text-center'>Activities Details</h2>
            <h3 className='mt-6 font-bold text-lg ml-3'>Activities Time: {total} minutes</h3>
        </div>
    );
};

export default Cart;