import React from 'react'

export default function Winner1() {
    
    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div className="text-center text-5xl text-white">
            <h1 className="text-[rgb(160,21,62)]  my-5 text-8xl">Player 1 won the game.</h1>
            <button className='w-[content] p-4 bg-blue-400 rounded-lg text-3xl' onClick={() => reloadPage()}>Play Again</button>
        </div>
    )
}