import Square from "@/app/components/Square/Square";
import { checkWinner } from "@/app/utils/validation_utils";
import styles from "./Board.module.css";

export enum Player {
    X = "X",
    O = "O",
}

type BoardProps = {
    xIsNext: boolean;
    squares: (string | null)[];
    onPlay: (nextSquares: (string | null)[]) => void;
    sideSize: number;
};

export default function Board({
    xIsNext,
    squares,
    onPlay,
    sideSize,
}: BoardProps) {
    const winner = checkWinner(squares, sideSize);

    function handleClick(i: number) {
        if (squares[i] || winner) {
            // checks to make sure that the square tile does not already have a mark or if a winner has been decided
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? Player.X : Player.O;
        onPlay(nextSquares);
    }

    let status;
    if (winner) {
        status = "The winner is " + winner + "!";
    } else if (squares.every((val) => val != null)) {
        status = "You have achieved a TIE!";
    } else {
        status = "Next Player: " + (xIsNext ? Player.X : Player.O);
    }

    function generateSquareBoard(sideSize: number) {
        const row = [];
        for (let i = 0; i < sideSize; i++) {
            const col = [];
            for (let j = sideSize * i; j < sideSize * (i + 1); j++) {
                col.push(
                    <Square
                        key={j}
                        value={squares[j]}
                        onSquareClick={() => handleClick(j)}
                    />
                );
            }
            row.push(
                <div key={i} className={styles.boardRow}>
                    {col}
                </div>
            );
        }
        return row;
    }

    return (
        <>
            <div className={styles.status}>{status}</div>
            {generateSquareBoard(sideSize)}
        </>
    );
}
