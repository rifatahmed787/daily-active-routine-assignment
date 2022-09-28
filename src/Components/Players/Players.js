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
                <h1 className='text-3xl font-bold text-blue-600/100'>DAILY-ACTIVE-ROUTINE</h1>
                <div className='grid grid-cols-3'>
                    {
                        players.map(player => <Player
                            player={player}
                        ></Player>)
                    }
                </div>
            </div>
            <div>
                <h1>hello</h1>
            </div>
        </div>
    );
};

export default Players;