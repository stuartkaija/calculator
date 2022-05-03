import React from 'react';
import './Header.scss';

export default function Header() {
    return (
        <header className='header'>
            <h1 className='header__title'>calc</h1>
            <button className='header__dark-toggle'>Light/Dark</button>
        </header>
    )
}
