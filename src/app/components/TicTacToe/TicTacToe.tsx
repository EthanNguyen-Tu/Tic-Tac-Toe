import Board from "@/app/components/Board/Board";
import { useState } from "react";
import "./TicTacToe.css";

function TicTacToe({ boardSideSize }) {
    const [history, setHistory] = useState([
        Array(boardSideSize ** 2).fill(null),
    ]);
    const [currentMove, setCurrentMove] = useState(0);

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((_, move) => {
        let description = move > 0 ? "Go to move #" + move : "Go to game start";
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="tic-tac-toe">
            {boardSideSize && (
                <div className="tic-tac-toe-board">
                    <Board
                        xIsNext={currentMove % 2 === 0}
                        squares={history[currentMove]}
                        onPlay={handlePlay}
                        sideSize={boardSideSize}
                    />
                </div>
            )}
            <div className="tic-tac-toe-info">
                <h3>Game History:</h3>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default TicTacToe;
