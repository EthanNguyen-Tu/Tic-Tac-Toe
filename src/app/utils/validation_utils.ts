import { Player } from "@/app/components/Board/Board";

// Time Complexity: O(n^2) where n is the side size of the board.
// Space Complexity: O(n) where n is the side size of the board.

export function checkWinner(
    squares: (string | null)[],
    sideSize: number
): Player | null {
    const rows: number[] = new Array(sideSize).fill(0);
    const cols: number[] = new Array(sideSize).fill(0);
    let diag1: number = 0;
    let diag2: number = 0;

    for (let i = 0; i < sideSize; i++) {
        for (let j = 0; j < sideSize; j++) {
            if (squares[i * sideSize + j] === Player.X) {
                rows[i] += 1;
                cols[j] += 1;
                if (i === j) {
                    diag1 += 1;
                }
                if (i + j === sideSize - 1) {
                    diag2 += 1;
                }
            } else if (squares[i * sideSize + j] === Player.O) {
                rows[i] -= 1;
                cols[j] -= 1;
                if (i === j) {
                    diag1 -= 1;
                }
                if (i + j === sideSize - 1) {
                    diag2 -= 1;
                }
            }
        }
    }

    if (
        rows.includes(sideSize) ||
        cols.includes(sideSize) ||
        diag1 === sideSize ||
        diag2 === sideSize
    ) {
        return Player.X;
    }

    if (
        rows.includes(-sideSize) ||
        cols.includes(-sideSize) ||
        diag1 === -sideSize ||
        diag2 === -sideSize
    ) {
        return Player.O;
    }

    return null;
}
