"use client";

import TicTacToe from "@/app/components/TicTacToe/TicTacToe";
import { useId, useRef, useState } from "react";
import { boundedNumber } from "./utils/number_utils";
import styles from "./page.module.css";

export default function Home() {
    const boardFormId = useId();
    const [boardSideSize, setBoardSideSize] = useState(5);
    const [boardKey, setBoardKey] = useState(true); // reset the board
    const boardSize: React.RefObject<number> = useRef(5);

    const handleSubmit = () => {
        setBoardSideSize(Number(boardSize.current));
        setBoardKey(!boardKey);
    };

    const handleBoardSizeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (!isNaN(value)) {
            boardSize.current = boundedNumber(value, 3, 10);
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.main}>
                <div className={styles.boardSizeForm}>
                    <label htmlFor={boardFormId}>Board Size (3 to 10):</label>
                    <input
                        id={boardFormId}
                        type="number"
                        min={3}
                        max={10}
                        placeholder="Number from 3 to 10."
                        onChange={handleBoardSizeInput}
                        style={{ width: "150px" }}
                    />
                    <input
                        type="submit"
                        onClick={handleSubmit}
                        value="Set Board"
                    />
                </div>
                <TicTacToe
                    key={`board-${boardKey}`}
                    boardSideSize={boardSideSize}
                />
            </div>
        </div>
    );
}

