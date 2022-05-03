import React from 'react';
import './Header.scss';

export default function Header() {
    return (
        <header className='header'>
            <h1 className='header__title'>calc</h1>
            <label className='header__switch'>
                <input className='header__input-hidden' type="checkbox" />
                <span className='header__slider'></span>
            </label>
        </header>
    )
}
