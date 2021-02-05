import React from 'react';
import './Meme.css';    

function Meme({name,caption,url}) {
    return (
        <div className='meme'>
            <h5>{name}</h5>
            <p>{caption}</p>
            <img src={url} alt="meme"/>
        </div>
    )
}

export default Meme;
