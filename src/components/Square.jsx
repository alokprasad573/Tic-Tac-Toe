import React from 'react'

export default function Sqaure({value, onClick}) {
    return(
        <div className='text-[rgb(255,210,63)] border-4 w-[10rem] h-[10rem] flex justify-center items-center' onClick={onClick}>
            { value === "X"
                ? <h1 className='text-[rgb(160,21,62)] text-[7.5rem]'>{value}</h1>
                : <h1 className='text-[rgb(51,115,87)] text-[7.5rem]'>{value}</h1>
            }
        </div>
    )
}