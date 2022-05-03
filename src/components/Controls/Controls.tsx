import React from 'react';
import './Controls.scss';
//@ts-ignore
import NumberButton from '../NumberButton/NumberButton.tsx';

export default function Controls() {
    return (
        <div className='controls'>
            <NumberButton />
            <NumberButton />
            <NumberButton />

        </div>
    )
}
