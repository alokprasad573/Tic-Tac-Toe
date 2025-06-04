import React from "react";
import Square from "./components/Square";

export default function Board() {
    const [state, setState] = React.useState(Array(9).fill(""));
    const [isXTurn, setisXTurn] = React.useState(true);

    const checkWinner = () => {
        const winningPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], //row
            [0, 3, 6], [1, 4, 7], [2, 5, 8], //column
            [0, 4, 8], [2, 4, 6], //diagonal
        ];

        for (let pattern of winningPatterns) {
            const [a, b, c] = pattern;
            if (state[a] !== null && state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return null;
    };

    const isWinner = checkWinner();

    const handleClick = (index) => {
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "0";
        setState(copyState);
        setisXTurn(!isXTurn);
    };

    return (
        <div className="text-white">
            {isWinner ? (
                <>
                    {isWinner === "X" ?
                        <div className="text-center text-5xl text-white">
                            <h1 className="text-[rgb(160,21,62)]  my-5 text-8xl">Player 1 won the game.</h1>
                            <p>Refresh to replay</p>
                        </div> : null}

                    {isWinner === "0" ?
                        <div className="text-center text-5xl text-white">
                            <h1 className="text-[rgb(51,115,87)] my-5 text-8xl">Player 2 won the game.</h1>
                            <p>Refresh to replay</p>
                        </div> : null}
                </>
            ) : (
                <>
                    <div className="flex flex-row justify-evenly items-center">
                        <div className="text-center my-8 text-5xl">
                            <p>Player 1 : <span className="text-[rgb(160,21,62)]">X</span></p>
                            <br />
                            <p>Player 2 : <span className="text-[rgb(51,115,87)]">0</span></p>
                            <br />
                            <p>If Game drwas then <br /> refresh the page.</p>
                        </div>
                        <div>
                            <div className="flex flex-row justify-center">
                                <Square onClick={() => handleClick(0)} value={state[0]} />
                                <Square onClick={() => handleClick(1)} value={state[1]} />
                                <Square onClick={() => handleClick(2)} value={state[2]} />
                            </div>
                            <div className="flex flex-row justify-center">
                                <Square onClick={() => handleClick(3)} value={state[3]} />
                                <Square onClick={() => handleClick(4)} value={state[4]} />
                                <Square onClick={() => handleClick(5)} value={state[5]} />
                            </div>
                            <div className="flex flex-row justify-center">
                                <Square onClick={() => handleClick(6)} value={state[6]} />
                                <Square onClick={() => handleClick(7)} value={state[7]} />
                                <Square onClick={() => handleClick(8)} value={state[8]} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}