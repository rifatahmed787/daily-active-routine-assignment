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
            <h3 className='mt-6 font-bold text-lg ml-3 border bottom-1 p-5 bg-slate-400 rounded-lg'>Activities Time: {total} minutes</h3>
            <h3 className='mt-6 font-bold text-lg ml-3 border bottom-1 p-5 bg-slate-400 rounded-lg'>Break Time:</h3>
            <button className="btn btn-wide btn-primary mt-20 ml-10">Activity Completed</button>
        </div>
    );
};

export default Cart;