import Board from "@/app/components/Board/Board";
import { useState } from "react";
import styles from "./TicTacToe.module.css";

type TicTacToeProps = {
    boardSideSize: number;
};

export default function TicTacToe({ boardSideSize }: TicTacToeProps) {
    const [history, setHistory] = useState([
        Array(boardSideSize ** 2).fill(null),
    ]);
    const [currentMove, setCurrentMove] = useState(0);

    function handlePlay(nextSquares: (string | null)[]) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((_, move) => {
        const description: string =
            move > 0 ? "Go to move #" + move : "Go to game start";
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className={styles.container}>
            {boardSideSize && (
                <div className={styles.board}>
                    <Board
                        xIsNext={currentMove % 2 === 0}
                        squares={history[currentMove]}
                        onPlay={handlePlay}
                        sideSize={boardSideSize}
                    />
                </div>
            )}
            <div className={styles.history}>
                <h3>Game History:</h3>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}
