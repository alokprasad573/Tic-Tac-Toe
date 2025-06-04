import React from 'react'

export default function Instruction() {

    const reloadPage = () => {
        window.location.reload();
    }
    
    return (
        <div className="text-center text-white my-8 text-5xl">
            <h1 className='underline'>Instructions</h1>
            <br />
            <p>Player 1 : <span className="text-[rgb(160,21,62)]">X</span></p>
            <br />
            <p>Player 2 : <span className="text-[rgb(51,115,87)]">0</span></p>
            <br />
            <button className='w-[content] p-4 bg-blue-400 rounded-lg text-3xl' onClick={() => reloadPage()}>Play Again</button>
        </div>
    )
}