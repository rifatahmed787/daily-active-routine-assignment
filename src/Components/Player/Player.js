import React from 'react';

const Player = (props) => {
    // console.log(props)
    const { name, img, details, time } = props.player;
    const { AddToCart } = props;
    return (
        <div className='mb-6'>
            <div className="card w-11/12 bg-base-100 shadow-xl h-full">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl w-full h-52" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <h5>Time required: {time}</h5>
                    <div className="card-actions">
                        <button onClick={() => AddToCart(props.player)} className="btn btn-wide btn-primary">Add To List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;