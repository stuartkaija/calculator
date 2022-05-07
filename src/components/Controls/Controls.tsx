import React from 'react';
import './Controls.scss';

export default function Controls({handleNumber, handleReset, handleOperator, handleDelete, handleEquals}) {

    return (
        <div className='controls'>
            <button className='controls__button' onClick={() => {handleNumber('7')}}>7</button>
            <button className='controls__button' onClick={() => {handleNumber('8')}}>8</button>
            <button className='controls__button' onClick={() => {handleNumber('9')}}>9</button>
            <button className='controls__button' onClick={() => {handleDelete()}}>DEL</button>
            <button className='controls__button' onClick={() => {handleNumber('4')}}>4</button>
            <button className='controls__button' onClick={() => {handleNumber('5')}}>5</button>
            <button className='controls__button' onClick={() => {handleNumber('6')}}>6</button>
            <button className='controls__button' onClick={() => {handleOperator('+')}}>+</button>
            <button className='controls__button' onClick={() => {handleNumber('1')}}>1</button>
            <button className='controls__button' onClick={() => {handleNumber('2')}}>2</button>
            <button className='controls__button' onClick={() => {handleNumber('3')}}>3</button>
            <button className='controls__button' onClick={() => {handleOperator('-')}}>-</button>
            <button className='controls__button' onClick={() => {handleNumber('.')}}>.</button>
            <button className='controls__button' onClick={() => {handleNumber('0')}}>0</button>
            <button className='controls__button' onClick={() => {handleOperator('/')}}>/</button>
            <button className='controls__button' onClick={() => {handleOperator('x')}}>x</button>
            <button className='controls__button' onClick={() => {handleReset()}}>RESET</button>
            <button className='controls__button' onClick={() => {handleEquals()}}>=</button>
        </div>
    )
}
