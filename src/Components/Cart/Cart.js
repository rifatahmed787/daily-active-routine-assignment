import React from 'react';
import Swal from 'sweetalert2'

const Cart = ({ cart, time }) => {

    // console.log(time)

    let total = 0;
    // let time = 0;


    for (const player of cart) {
        // console.log(player)
        total = total + parseFloat(player.time)
        // console.log(total)
    }

    const AddToast = () => {
        Swal.fire(
            'Good job!',
            'You completed your activities!',
            'success'
        )
    }

    return (
        <div>
            <h2 className='mt-10 font-bold text-xl text-center'>Activities Details</h2>
            <h3 className='mt-6 font-bold text-lg ml-3 border bottom-1 p-5 bg-slate-400 rounded-lg'>Activities Time: {total} minutes</h3>
            <h3 className='mt-6 font-bold text-lg ml-3 border bottom-1 p-5 bg-slate-400 rounded-lg'>Break Time: {time}</h3>
            <button onClick={AddToast} className="btn btn-wide btn-primary mt-20 ml-10">Activity Completed</button>
        </div>
    );
};

export default Cart;