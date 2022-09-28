import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("players.json")
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, [])
    return (
        <div className='players'>
            <div>
                <h1 className='text-3xl font-bold text-blue-600/100 mt-20 ml-10'>DAILY-ACTIVE-ROUTINE</h1>
                <h3 className='mt-8 font-medium text-xl ml-10'>Select today's activity</h3>
                <div className='grid grid-cols-3'>
                    {
                        players.map(player => <Player
                            player={player}
                        ></Player>)
                    }
                </div>
            </div>
            <div className='shadow-xl bg-stone-100'>
                <h1 className='font-bold text-2xl text-center mt-10'>Md Rifat</h1>
                <p className='font-bold text-base text-center mt-2'>Dhaka, Bangladesh</p>
            </div>
        </div>
    );
};

export default Players;