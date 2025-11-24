export function boundedNumber(
    number: number,
    lower: number = -Infinity,
    upper: number = Infinity
) {
    if (number < lower) {
        return lower;
    } else if (number > upper) {
        return upper;
    } else {
        return number;
    }
}
