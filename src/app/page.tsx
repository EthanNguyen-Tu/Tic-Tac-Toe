"use client";

import TicTacToe from "@/app/components/TicTacToe/TicTacToe";
import { useId, useRef, useState } from "react";
import { boundedNumber } from "./utils/number_utils";

export default function Home() {
    const boardFormId = useId();
    const [boardSideSize, setBoardSideSize] = useState(5);
    const [boardKey, setBoardKey] = useState(true); // reset the board
    let boardSize = useRef(5);

    const handleSubmit = () => {
        setBoardSideSize(Number(boardSize.current));
        setBoardKey(!boardKey);
    };

    const handleBoardSizeInput = (e) =>
        (boardSize.current = boundedNumber(e.target.value, 3, 10));

    return (
        <div style={{ justifyItems: "center" }}>
            <div style={{ width: "400px", paddingBottom: "30px" }}>
                <label htmlFor={boardFormId} style={{ paddingRight: "10px" }}>
                    Board Size (3 to 10):
                </label>
                <input
                    id={boardFormId}
                    type="number"
                    min={3}
                    max={10}
                    placeholder="Number from 3 to 10."
                    onChange={handleBoardSizeInput}
                    style={{ width: "150px" }}
                />
                <input type="submit" onClick={handleSubmit} value="Set Board" />
            </div>
            <TicTacToe
                key={`board-${boardKey}`}
                boardSideSize={boardSideSize}
            />
        </div>
    );
}

