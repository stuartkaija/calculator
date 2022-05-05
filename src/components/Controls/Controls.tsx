import React from 'react';
import './Controls.scss';

export default function Controls({handleNumber, handleReset, handleOperator, handleDelete}) {

    return (
        <div className='controls'>
            <button onClick={()=>{handleNumber('7')}}>7</button>
            <button onClick={()=>{handleNumber('8')}}>8</button>
            <button onClick={()=>{handleNumber('9')}}>9</button>
            <button onClick={()=>{handleDelete()}}>DEL</button>
            <button onClick={()=>{handleNumber('4')}}>4</button>
            <button onClick={()=>{handleNumber('5')}}>5</button>
            <button onClick={()=>{handleNumber('6')}}>6</button>
            <button onClick={()=>{handleOperator('+')}}>+</button>
            <button onClick={()=>{handleNumber('1')}}>1</button>
            <button onClick={()=>{handleNumber('2')}}>2</button>
            <button onClick={()=>{handleNumber('3')}}>3</button>
            <button onClick={()=>{handleOperator('-')}}>-</button>
            <button onClick={()=>{handleNumber('.')}}>.</button>
            <button onClick={()=>{handleNumber('0')}}>0</button>
            <button onClick={()=>{handleOperator('/')}}>/</button>
            <button onClick={()=>{handleOperator('x')}}>x</button>
            <button onClick={()=>{handleReset()}}>RESET</button>
            <button>=</button>
        </div>
    )
}
