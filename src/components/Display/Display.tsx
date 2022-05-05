import React from 'react';
import './Display.scss';

export default function Display({display}) {
    return (
        <div className='display'>
            <h1 className='display__nums'>{display}</h1>
        </div>
    )
}
