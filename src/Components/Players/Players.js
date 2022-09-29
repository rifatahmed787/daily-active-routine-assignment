import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch("players.json")
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, [])

    const AddToCart = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);

    }

    const AddBreakTime = (e) => {
        setTime(e.target.innerText);
    }

    return (
        <div className='players'>
            <div>
                <div className='flex text-center'>
                    <FontAwesomeIcon className='text-3xl font-bold text-blue-500 mt-20 ml-10' icon={faDumbbell}></FontAwesomeIcon>
                    <h1 className='text-3xl font-bold text-blue-600/100 mt-20 ml-6'>DAILY-ACTIVE-ROUTINE</h1>
                </div>
                <h3 className='mt-8 font-medium text-xl ml-10'>Select today's activities</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        players.map(player => <Player
                            player={player}
                            key={player.id}
                            AddToCart={AddToCart}
                        ></Player>)
                    }
                </div>
            </div>
            <div className='shadow-xl bg-stone-100 sticky'>
                <h1 className='font-bold text-2xl text-center mt-10'>Md Rifat</h1>
                <p className='font-bold text-base text-center mt-2'>Dhaka, Bangladesh</p>
                <div className="overflow-x-auto mx-3">
                    <table className="table w-full mt-4">
                        <tbody>
                            <tr className="active">
                                <td><span className='font-bold text-2xl'>75</span>kg <br />Weight </td>
                                <td><span className='font-bold text-2xl'>5.6</span><br />Height</td>
                                <td><span className='font-bold text-2xl'>24</span>yrs <br />Age</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="overflow-x-auto mx-3">
                    <h1 className='font-bold text-2xl text-center mt-10'>Add A Break</h1>
                    <table className="table w-full mt-4">
                        <tbody>
                            <tr className="active">
                                <td>
                                    <button onClick={AddBreakTime} className="btn btn-circle  btn-outline lowercase">10min</button>
                                </td>
                                <td>
                                    <button onClick={AddBreakTime} className="btn btn-circle btn-outline lowercase">15min</button>
                                </td>
                                <td>
                                    <button onClick={AddBreakTime} className="btn btn-circle btn-outline lowercase">20min</button>
                                </td>
                                <td>
                                    <button onClick={AddBreakTime} className="btn btn-circle btn-outline lowercase">30min</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Cart cart={cart}
                    time={time}
                ></Cart>

            </div>
        </div>
    );
};

export default Players;