import React from "react";
import Square from "./Square";
import Winner1 from "./Winner1";
import Winner2 from "./Winner2";
import Instruction from './Instruction';

export default function Board() {
    const [state, setState] = React.useState(Array(9).fill(""));
    const [isXTurn, setisXTurn] = React.useState(true);

    const checkWinner = () => {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8], //row
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8], //column
            [0, 4, 8],
            [2, 4, 6], //diagonal
        ];

        for (let pattern of winningPatterns) {
            const [a, b, c] = pattern;
            if (
                state[a] !== null &&
                state[a] &&
                state[a] === state[b] &&
                state[a] === state[c]
            ) {
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
                    {isWinner === "X" ? <Winner1 /> : null}
                    {isWinner === "0" ? <Winner2 /> : null}
                </>
            ) : (
                <>
                    <div className="flex flex-row items-center justify-evenly">
                        <Instruction />
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