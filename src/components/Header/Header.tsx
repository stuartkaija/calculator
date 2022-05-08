import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>calculator</h1>
            <label className='header__switch'>
                <input className='header__input-hidden' type="checkbox" />
                <span className='header__slider'></span>
            </label>
        </header>
    )
}

export default Header;