export function boundedNumber(number, lower = -Infinity, upper = Infinity) {
    if (number < lower) {
        return lower;
    } else if (number > upper) {
        return upper;
    } else {
        return number;
    }
}
