import React, { useState } from 'react';
import { createContext } from 'react';

export const GamerContext = createContext();

export const GamerContextProvider = (props) => {

    const [points, setPoints] = useState(50);

    const [play1, setPlay1] = useState(null);
    const [play2, setPlay2] = useState(null);

    const [winner, setWinner] = useState('');
    const [loser, setLoser] = useState('');

    return (
        <GamerContext.Provider
        value={{
            points,
            setPoints,
            play1,
            setPlay1,
            play2,
            setPlay2,
            winner,
            setWinner,
            loser,
            setLoser
        }}
        >
            {props.children}
        </GamerContext.Provider>
    );
};