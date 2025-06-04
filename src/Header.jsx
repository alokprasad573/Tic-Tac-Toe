import React from 'react'
import './index.css'

export default function Header() {
    return (
        <h1 className='text-white text-center text-[7.5rem] font-bold heading'>
            <span className='text-[rgb(160,21,62)]'>Tic</span>-<span className='text-[rgb(255,210,63)]'>Tac</span>-<span className='text-[rgb(51,115,87)]'>Toe</span>
        </h1>
    );
}