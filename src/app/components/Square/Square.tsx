import styles from "./Square.module.css";

type SquareProps = {
    value: string | null;
    onSquareClick: () => void;
};

export default function Square({ value, onSquareClick }: SquareProps) {
    return (
        <button className={styles.square} onClick={onSquareClick}>
            {value}
        </button>
    );
}
